const ffmpegPath = require("ffmpeg-static");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const publicVideosDir = path.resolve(__dirname, "../public/videos");
if (!fs.existsSync(publicVideosDir)) {
  fs.mkdirSync(publicVideosDir, { recursive: true });
}

function runFfmpeg(args) {
  const cmd = `"${ffmpegPath}" -y ${args}`;
  console.log(`Executing: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

function formatSize(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

async function main() {
  console.log("=== PROJECT BUDDY VIDEO OPTIMIZATION PIPELINE ===");

  const report = [];

  // 1. Process Custom_software.mp4
  const customSoftwareSrc = path.resolve(__dirname, "../Custom_software.mp4");
  if (fs.existsSync(customSoftwareSrc)) {
    const origSize = fs.statSync(customSoftwareSrc).size;
    console.log(`\nProcessing Custom_software.mp4 (Original: ${formatSize(origSize)})...`);

    const outMp4 = path.join(publicVideosDir, "Custom_software.mp4");
    const outWebm = path.join(publicVideosDir, "Custom_software.webm");
    const outPosterWebp = path.join(publicVideosDir, "custom-software-poster.webp");
    const outPosterJpg = path.join(publicVideosDir, "custom-software-poster.jpg");

    // Extract crisp poster frame at 0.5s
    runFfmpeg(`-ss 0.5 -i "${customSoftwareSrc}" -vframes 1 -q:v 2 "${outPosterJpg}"`);
    runFfmpeg(`-ss 0.5 -i "${customSoftwareSrc}" -vframes 1 -c:v libwebp -quality 85 "${outPosterWebp}"`);

    // Web-optimized MP4 (H.264, crf 24, preset fast, faststart, no audio)
    runFfmpeg(`-i "${customSoftwareSrc}" -c:v libx264 -crf 24 -preset fast -pix_fmt yuv420p -an -movflags +faststart "${outMp4}"`);

    // High efficiency WebM (VP9, crf 32, cpu-used 4, row-mt 1, no audio)
    runFfmpeg(`-i "${customSoftwareSrc}" -c:v libvpx-vp9 -crf 32 -b:v 0 -cpu-used 4 -row-mt 1 -threads 8 -an "${outWebm}"`);

    const newMp4Size = fs.statSync(outMp4).size;
    const newWebmSize = fs.statSync(outWebm).size;

    report.push({
      name: "Custom_software (Chapter 06)",
      original: formatSize(origSize),
      optimizedMp4: formatSize(newMp4Size),
      webm: formatSize(newWebmSize),
      savings: `${Math.round((1 - newWebmSize / origSize) * 100)}% (WebM)`,
    });
  }

  // 2. Process other core website videos
  const coreVideos = [
    { file: "1.mp4", name: "Connected Systems (Chapter 04)" },
    { file: "2.mp4", name: "Brand Transition (Chapter 02)" },
    { file: "3.mp4", name: "Project Buddy Philosophy (Chapter 10/11)" },
    { file: "4.mp4", name: "Services & Capabilities (Chapter 05)" },
    { file: "6.mp4", name: "AI Automation (Chapter 07)" },
    { file: "7.mp4", name: "Digital Products (Chapter 08)" },
    { file: "atlas.mp4", name: "Atlas Product Showcase" },
    { file: "proxima-ai.mp4", name: "Proxima AI Showcase" },
  ];

  for (const item of coreVideos) {
    const srcPath = path.join(publicVideosDir, item.file);
    if (!fs.existsSync(srcPath)) {
      console.log(`Skipping missing ${item.file}`);
      continue;
    }

    const origSize = fs.statSync(srcPath).size;
    const baseName = path.parse(item.file).name;
    console.log(`\nOptimizing ${item.name} (${item.file}, ${formatSize(origSize)})...`);

    const tempOptimizedMp4 = path.join(publicVideosDir, `${baseName}.opt.mp4`);
    const outWebm = path.join(publicVideosDir, `${baseName}.webm`);
    const outPosterWebp = path.join(publicVideosDir, `${baseName}-poster.webp`);
    const outPosterJpg = path.join(publicVideosDir, `${baseName}-poster.jpg`);

    // Poster
    runFfmpeg(`-ss 0.3 -i "${srcPath}" -vframes 1 -q:v 2 "${outPosterJpg}"`);
    runFfmpeg(`-ss 0.3 -i "${srcPath}" -vframes 1 -c:v libwebp -quality 85 "${outPosterWebp}"`);

    // WebM (VP9 fast multithreaded)
    runFfmpeg(`-i "${srcPath}" -c:v libvpx-vp9 -crf 32 -b:v 0 -cpu-used 4 -row-mt 1 -threads 8 -an "${outWebm}"`);

    // Optimized MP4 (H.264 faststart)
    runFfmpeg(`-i "${srcPath}" -c:v libx264 -crf 24 -preset fast -pix_fmt yuv420p -an -movflags +faststart "${tempOptimizedMp4}"`);

    const optSize = fs.statSync(tempOptimizedMp4).size;
    if (optSize < origSize) {
      fs.copyFileSync(tempOptimizedMp4, srcPath);
    }
    if (fs.existsSync(tempOptimizedMp4)) {
      fs.unlinkSync(tempOptimizedMp4);
    }

    const finalMp4Size = fs.statSync(srcPath).size;
    const finalWebmSize = fs.statSync(outWebm).size;

    report.push({
      name: item.name,
      original: formatSize(origSize),
      optimizedMp4: formatSize(finalMp4Size),
      webm: formatSize(finalWebmSize),
      savings: `${Math.round((1 - finalWebmSize / origSize) * 100)}% (WebM)`,
    });
  }

  console.log("\n=== OPTIMIZATION AUDIT SUMMARY ===");
  console.table(report);
}

main().catch(console.error);

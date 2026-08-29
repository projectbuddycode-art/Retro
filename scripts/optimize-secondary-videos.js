const ffmpegPath = require("ffmpeg-static");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const publicVideosDir = path.resolve(__dirname, "../public/videos");

function runFfmpeg(args) {
  const cmd = `"${ffmpegPath}" -y ${args}`;
  console.log(`Executing: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

function formatSize(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

const secondaryVideos = [
  "engineering-infra.mp4",
  "security-tech.mp4",
  "ai-automation.mp4",
  "Blue_line_forms_digital_infrastr._202608232314.mp4",
  "System_automating_business_data_._202608232317.mp4",
  "Enterprise_software_system_engin._1080p_202608232315.mp4",
  "Secure_enterprise_technology_inf._1080p_202608232316.mp4",
  "idea-to-system.mp4"
];

for (const file of secondaryVideos) {
  const srcPath = path.join(publicVideosDir, file);
  if (!fs.existsSync(srcPath)) continue;

  const origSize = fs.statSync(srcPath).size;
  const baseName = path.parse(file).name;
  console.log(`Optimizing ${file} (${formatSize(origSize)})...`);

  const tempMp4 = path.join(publicVideosDir, `${baseName}.tmp.mp4`);
  const posterWebp = path.join(publicVideosDir, `${baseName}-poster.webp`);
  const posterJpg = path.join(publicVideosDir, `${baseName}-poster.jpg`);
  const outWebm = path.join(publicVideosDir, `${baseName}.webm`);

  // Poster
  runFfmpeg(`-ss 0.3 -i "${srcPath}" -vframes 1 -q:v 2 "${posterJpg}"`);
  runFfmpeg(`-ss 0.3 -i "${srcPath}" -vframes 1 -c:v libwebp -quality 85 "${posterWebp}"`);

  // Faststart MP4
  runFfmpeg(`-i "${srcPath}" -c:v libx264 -crf 24 -preset fast -pix_fmt yuv420p -an -movflags +faststart "${tempMp4}"`);

  // WebM
  runFfmpeg(`-i "${srcPath}" -c:v libvpx-vp9 -crf 32 -b:v 0 -cpu-used 4 -row-mt 1 -threads 8 -an "${outWebm}"`);

  const optSize = fs.statSync(tempMp4).size;
  if (optSize < origSize) {
    fs.copyFileSync(tempMp4, srcPath);
  }
  if (fs.existsSync(tempMp4)) {
    fs.unlinkSync(tempMp4);
  }

  console.log(`Finished ${file}: ${formatSize(origSize)} -> MP4: ${formatSize(fs.statSync(srcPath).size)}, WebM: ${formatSize(fs.statSync(outWebm).size)}`);
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, projectType, challenge, timeline, budget } = body;

    // Field Validation
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: "Validation Error: Name, email, and project type are required." },
        { status: 400 }
      );
    }

    const recipients = [
      "info@projectbuddy.co.in",
      "projectbuddy.code@gmail.com",
    ];

    const subjectLine = `New Project Brief — ${projectType} — ${name}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #0F172A; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <div style="background-color: #0A1128; color: #FFFFFF; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">PROJECT BUDDY</h2>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #38BDF8; text-transform: uppercase; font-family: monospace;">NEW ENTERPRISE INQUIRY BRIEF</p>
        </div>

        <div style="padding: 24px; background-color: #FFFFFF;">
          <h3 style="margin-top: 0; color: #0052FF;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Work Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0052FF;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0;">${phone || "N/A"}</td>
            </tr>
          </table>

          <h3 style="color: #0052FF; border-top: 1px solid #E2E8F0; padding-top: 16px;">Project Scope & Specifications</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Project Type:</td>
              <td style="padding: 8px 0; color: #0052FF; font-weight: bold;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Estimated Budget:</td>
              <td style="padding: 8px 0;">${budget || "Not Specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Desired Timeline:</td>
              <td style="padding: 8px 0;">${timeline || "Not Specified"}</td>
            </tr>
          </table>

          <h3 style="color: #0052FF; border-top: 1px solid #E2E8F0; padding-top: 16px;">Operational Challenge & Context</h3>
          <div style="background-color: #F8FAFC; padding: 16px; border-radius: 8px; border: 1px solid #E2E8F0; font-size: 14px; leading: 1.6;">
            ${challenge ? challenge.replace(/\n/g, "<br/>") : "No detailed description provided."}
          </div>
        </div>

        <div style="background-color: #F1F5F9; padding: 16px; text-align: center; font-size: 11px; color: #64748B;">
          This email was delivered directly via the Project Buddy Web Platform API.
        </div>
      </div>
    `;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Project Buddy Inquiries" <${smtpUser}>`,
        to: recipients.join(", "),
        replyTo: email,
        subject: subjectLine,
        html: htmlBody,
      });

      console.log(`[Contact API] Delivered project brief to: ${recipients.join(", ")}`);
    } else {
      console.log(`[Contact API Dev Logger] SMTP Credentials missing. Logging brief payload to server:`);
      console.log(`To: ${recipients.join(", ")}`);
      console.log(`Subject: ${subjectLine}`);
      console.log(`Payload:`, body);
    }

    return NextResponse.json({
      success: true,
      delivered: true,
      recipients: recipients,
      message: "Brief received and queued for leadership review.",
    });
  } catch (error: any) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Server Error: Unable to process project brief submission." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company = "N/A",
      phone = "N/A",
      website = "N/A",
      projectType = "Custom Software",
      challenge = "",
      timeline = "Not Specified",
      budget = "Not Specified",
      sourceUrl = "/",
    } = body;

    // 1. Strict Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    if (!projectType) {
      return NextResponse.json(
        { error: "Please select a project type or service category." },
        { status: 400 }
      );
    }

    // 2. Parse Recipients & Verified Domain Sender
    const rawEmailTo = process.env.EMAIL_TO || "info@projectbuddy.co.in,projectbuddy.code@gmail.com";
    const recipients = rawEmailTo.split(",").map((e) => e.trim()).filter(Boolean);
    
    let emailFrom = process.env.EMAIL_FROM || "Project Buddy <info@projectbuddy.co.in>";
    // Override any old onboarding@resend.dev environment variable to the verified production domain
    if (!emailFrom || emailFrom.includes("onboarding@resend.dev")) {
      emailFrom = "Project Buddy <info@projectbuddy.co.in>";
    }

    const apiKey = process.env.RESEND_API_KEY;

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    });

    // 3. HTML Email Body for Leadership / Internal Inbox
    const internalHtmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0F172A; max-width: 620px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; background-color: #FFFFFF; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <div style="background-color: #0A1128; color: #FFFFFF; padding: 28px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; letter-spacing: 1px; font-weight: 800;">PROJECT BUDDY</h2>
          <p style="margin: 6px 0 0 0; font-size: 11px; color: #38BDF8; text-transform: uppercase; font-family: monospace; letter-spacing: 2px;">NEW ENTERPRISE PROJECT REQUEST</p>
        </div>

        <div style="padding: 28px;">
          <h3 style="margin-top: 0; color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Client Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748B; width: 150px;">Full Name:</td>
              <td style="padding: 8px 0; font-weight: 700; color: #0F172A;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748B;">Work Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0052FF; font-weight: 600; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748B;">Company / Org:</td>
              <td style="padding: 8px 0; color: #0F172A;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748B;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #0F172A;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748B;">Website:</td>
              <td style="padding: 8px 0; color: #0F172A;">${website}</td>
            </tr>
          </table>

          <h3 style="color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Project Scope & Investment</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748B; width: 150px;">Project Type:</td>
              <td style="padding: 8px 0; color: #0052FF; font-weight: 700;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748B;">Estimated Budget:</td>
              <td style="padding: 8px 0; font-weight: 700; color: #059669;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748B;">Desired Timeline:</td>
              <td style="padding: 8px 0; color: #0F172A;">${timeline}</td>
            </tr>
          </table>

          <h3 style="color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Operational Challenge & Requirements</h3>
          <div style="background-color: #F8FAFC; padding: 18px; border-radius: 12px; border: 1px solid #E2E8F0; font-size: 14px; line-height: 1.65; color: #334155;">
            ${challenge ? challenge.replace(/\n/g, "<br/>") : "No detailed message provided."}
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #F1F5F9; font-size: 11px; color: #94A3B8; font-family: monospace;">
            Submitted At: ${timestamp}<br/>
            Source URL: ${sourceUrl}
          </div>
        </div>

        <div style="background-color: #F1F5F9; padding: 16px; text-align: center; font-size: 11px; color: #64748B;">
          Delivered via Project Buddy Resend API Service
        </div>
      </div>
    `;

    // 4. HTML Email Body for Client Confirmation
    const clientConfirmationHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0F172A; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; background-color: #FFFFFF;">
        <div style="background-color: #0A1128; color: #FFFFFF; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">PROJECT BUDDY</h2>
          <p style="margin: 4px 0 0 0; font-size: 11px; color: #38BDF8; text-transform: uppercase; font-family: monospace;">REQUEST CONFIRMATION</p>
        </div>
        <div style="padding: 28px;">
          <h3 style="margin-top: 0; color: #0F172A;">Thank you, ${name}.</h3>
          <p style="font-size: 15px; line-height: 1.6; color: #334155;">
            We have received your project request for <strong>${projectType}</strong>. Our senior engineering team is reviewing your requirements and will reach out shortly.
          </p>
          <div style="background-color: #F8FAFC; padding: 16px; border-radius: 12px; border: 1px solid #E2E8F0; margin: 20px 0;">
            <p style="margin: 0; font-size: 13px; color: #64748B;"><strong>Summary:</strong> ${projectType} • Budget: ${budget} • Timeline: ${timeline}</p>
          </div>
          <p style="font-size: 14px; color: #475569;">
            If you need to add further technical documentation or architectural details, reply directly to this email or reach us at <a href="mailto:hello@projectbuddy.co.in" style="color: #0052FF;">hello@projectbuddy.co.in</a>.
          </p>
          <br/>
          <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0F172A;">Project Buddy Engineering Team</p>
          <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748B;"><a href="https://www.projectbuddy.co.in" style="color: #0052FF; text-decoration: none;">www.projectbuddy.co.in</a></p>
        </div>
      </div>
    `;

    // 5. Send via Resend API if API Key is configured
    if (apiKey) {
      const resend = new Resend(apiKey);

      // Send to internal team recipients
      const internalRes = await resend.emails.send({
        from: emailFrom,
        to: recipients,
        replyTo: email,
        subject: `New Project Inquiry — ${name}`,
        html: internalHtmlBody,
      });

      if (internalRes.error) {
        console.error("[Resend API Error]:", internalRes.error);
        return NextResponse.json(
          { error: internalRes.error.message || "Email delivery failed via Resend API." },
          { status: 500 }
        );
      }

      // Send confirmation to client
      try {
        await resend.emails.send({
          from: emailFrom,
          to: [email],
          subject: "We received your project request — Project Buddy",
          html: clientConfirmationHtml,
        });
      } catch (clientErr) {
        console.warn("[Resend Client Confirmation Warning]:", clientErr);
      }

    } else {
      // Dev-only: no API key configured
      console.warn("[Contact] RESEND_API_KEY not set — email not sent.");
    }

    return NextResponse.json({
      success: true,
      message: "Project request received successfully. We’ll be in touch soon.",
      recipients: recipients,
    });
  } catch (error: any) {
    console.error("[Contact Route Error]:", error);
    return NextResponse.json(
      { error: "Server Error: Unable to process project request right now." },
      { status: 500 }
    );
  }
}

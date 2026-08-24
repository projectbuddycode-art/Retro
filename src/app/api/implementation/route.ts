import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      workEmail,
      phone = "N/A",
      website = "N/A",
      country = "N/A",
      industry = "N/A",
      companySize = "N/A",
      currentSystems = "",
      mainChallenge = "",
      budgetRange = "Not Specified",
      timeline = "Not Specified",
      additionalContext = "",
    } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!workEmail || typeof workEmail !== "string" || !workEmail.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    if (!company || typeof company !== "string" || !company.trim()) {
      return NextResponse.json(
        { error: "Please enter your company name." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const emailFrom =
      process.env.EMAIL_FROM && !process.env.EMAIL_FROM.includes("onboarding@resend.dev")
        ? process.env.EMAIL_FROM
        : "Project Buddy <hello@projectbuddy.co.in>";

    const recipients = ["info@projectbuddy.co.in", "projectbuddy.code@gmail.com"];

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    });

    const internalHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0F172A; max-width: 620px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; background-color: #FFFFFF;">
        <div style="background-color: #0A1128; color: #FFFFFF; padding: 28px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; letter-spacing: 1px; font-weight: 800;">PROJECT BUDDY</h2>
          <p style="margin: 6px 0 0 0; font-size: 11px; color: #38BDF8; text-transform: uppercase; font-family: monospace; letter-spacing: 2px;">IMPLEMENTATION & INTEGRATION ENQUIRY</p>
        </div>
        <div style="padding: 28px;">
          <h3 style="margin-top: 0; color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B; width: 170px;">Name:</td><td style="padding: 8px 0; font-weight: 700; color: #0F172A;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Company:</td><td style="padding: 8px 0; color: #0F172A;">${company}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Work Email:</td><td style="padding: 8px 0;"><a href="mailto:${workEmail}" style="color: #0052FF; font-weight: 600; text-decoration: none;">${workEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Phone:</td><td style="padding: 8px 0; color: #0F172A;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Website:</td><td style="padding: 8px 0; color: #0F172A;">${website}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Country:</td><td style="padding: 8px 0; color: #0F172A;">${country}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Industry:</td><td style="padding: 8px 0; color: #0F172A;">${industry}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Company Size:</td><td style="padding: 8px 0; color: #0F172A;">${companySize}</td></tr>
          </table>

          <h3 style="color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Project Scope</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B; width: 170px;">Budget Range:</td><td style="padding: 8px 0; font-weight: 700; color: #059669;">${budgetRange}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Timeline:</td><td style="padding: 8px 0; color: #0F172A;">${timeline}</td></tr>
          </table>

          <h3 style="color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Current Systems & Tools</h3>
          <div style="background-color: #F8FAFC; padding: 16px; border-radius: 12px; border: 1px solid #E2E8F0; font-size: 14px; line-height: 1.65; color: #334155; margin-bottom: 20px;">
            ${currentSystems ? currentSystems.replace(/\n/g, "<br/>") : "Not specified."}
          </div>

          <h3 style="color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Main Operational Challenge</h3>
          <div style="background-color: #F8FAFC; padding: 16px; border-radius: 12px; border: 1px solid #E2E8F0; font-size: 14px; line-height: 1.65; color: #334155; margin-bottom: 20px;">
            ${mainChallenge ? mainChallenge.replace(/\n/g, "<br/>") : "Not specified."}
          </div>

          ${additionalContext ? `<h3 style="color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Additional Context</h3><div style="background-color: #F8FAFC; padding: 16px; border-radius: 12px; border: 1px solid #E2E8F0; font-size: 14px; line-height: 1.65; color: #334155; margin-bottom: 20px;">${additionalContext.replace(/\n/g, "<br/>")}</div>` : ""}

          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #F1F5F9; font-size: 11px; color: #94A3B8; font-family: monospace;">
            Submitted At: ${timestamp}<br/>
            Source: /implementation
          </div>
        </div>
        <div style="background-color: #F1F5F9; padding: 16px; text-align: center; font-size: 11px; color: #64748B;">
          Delivered via Project Buddy Implementation Enquiry System
        </div>
      </div>
    `;

    const clientHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0F172A; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; background-color: #FFFFFF;">
        <div style="background-color: #0A1128; color: #FFFFFF; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">PROJECT BUDDY</h2>
          <p style="margin: 4px 0 0 0; font-size: 11px; color: #38BDF8; text-transform: uppercase; font-family: monospace;">ENQUIRY CONFIRMATION</p>
        </div>
        <div style="padding: 28px;">
          <h3 style="margin-top: 0; color: #0F172A;">Thank you, ${name}.</h3>
          <p style="font-size: 15px; line-height: 1.65; color: #334155;">
            We have received your implementation and integration enquiry for <strong>${company}</strong>. Our team will review your requirements and reach out shortly.
          </p>
          <div style="background-color: #F8FAFC; padding: 16px; border-radius: 12px; border: 1px solid #E2E8F0; margin: 20px 0;">
            <p style="margin: 0; font-size: 13px; color: #64748B;"><strong>Budget Range:</strong> ${budgetRange}</p>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #64748B;"><strong>Timeline:</strong> ${timeline}</p>
          </div>
          <p style="font-size: 14px; color: #475569;">
            Questions? Reach us at <a href="mailto:hello@projectbuddy.co.in" style="color: #0052FF;">hello@projectbuddy.co.in</a>
          </p>
          <br/>
          <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0F172A;">Project Buddy</p>
          <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748B;"><a href="https://www.projectbuddy.co.in" style="color: #0052FF; text-decoration: none;">www.projectbuddy.co.in</a></p>
        </div>
      </div>
    `;

    if (apiKey) {
      const resend = new Resend(apiKey);

      const internalRes = await resend.emails.send({
        from: emailFrom,
        to: recipients,
        replyTo: workEmail,
        subject: `Implementation Enquiry — ${name} (${company})`,
        html: internalHtml,
      });

      if (internalRes.error) {
        console.error("[Implementation — Resend Error]:", internalRes.error);
        return NextResponse.json(
          { error: internalRes.error.message || "Email delivery failed." },
          { status: 500 }
        );
      }

      try {
        await resend.emails.send({
          from: emailFrom,
          to: [workEmail],
          subject: "We received your enquiry — Project Buddy",
          html: clientHtml,
        });
      } catch (clientErr) {
        console.warn("[Implementation — Client Confirmation Warning]:", clientErr);
      }
    } else {
      console.warn("[Implementation] RESEND_API_KEY not set — email not sent.");
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully.",
    });
  } catch (error: any) {
    console.error("[Implementation Route Error]:", error);
    return NextResponse.json(
      { error: "Server error. Unable to process request right now." },
      { status: 500 }
    );
  }
}

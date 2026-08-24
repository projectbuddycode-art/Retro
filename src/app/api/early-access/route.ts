import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      workEmail,
      companyName,
      website = "N/A",
      role = "N/A",
      companySize = "N/A",
      productInterest = "Atlas",
      currentBusinessChallenge = "N/A",
      message = "",
      sourcePage = "/products",
    } = body;

    // Validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }
    if (!workEmail || typeof workEmail !== "string" || !workEmail.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid work email address." }, { status: 400 });
    }
    if (!companyName || typeof companyName !== "string" || !companyName.trim()) {
      return NextResponse.json({ error: "Please enter your company name." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const emailFrom =
      process.env.EMAIL_FROM && !process.env.EMAIL_FROM.includes("onboarding@resend.dev")
        ? process.env.EMAIL_FROM
        : "Project Buddy <info@projectbuddy.co.in>";

    const recipients = ["info@projectbuddy.co.in", "projectbuddy.code@gmail.com"];

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    });

    const isProxima = productInterest.toLowerCase().includes("proxima");
    const productName = isProxima ? "Proxima AI" : "Atlas";
    const productTagline = isProxima
      ? "AI-Powered Business Intelligence & Opportunity Discovery"
      : "AI-Powered Financial & Business Operations System";

    // Internal notification email
    const internalHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0F172A; max-width: 620px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; background-color: #FFFFFF;">
        <div style="background: linear-gradient(135deg, #050917 0%, #0A1128 100%); color: #FFFFFF; padding: 28px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; letter-spacing: 1px; font-weight: 800;">PROJECT BUDDY</h2>
          <p style="margin: 6px 0 0 0; font-size: 11px; color: #38BDF8; text-transform: uppercase; font-family: monospace; letter-spacing: 2px;">${productName.toUpperCase()} — EARLY ACCESS REQUEST</p>
        </div>
        <div style="padding: 28px;">
          <h3 style="color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Applicant Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B; width: 200px;">Full Name:</td><td style="padding: 8px 0; font-weight: 700; color: #0F172A;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Company Name:</td><td style="padding: 8px 0; color: #0F172A;">${companyName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Work Email:</td><td style="padding: 8px 0;"><a href="mailto:${workEmail}" style="color: #0052FF; font-weight: 600; text-decoration: none;">${workEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Website:</td><td style="padding: 8px 0; color: #0F172A;">${website}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Role / Title:</td><td style="padding: 8px 0; color: #0F172A;">${role}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #64748B;">Company Size:</td><td style="padding: 8px 0; color: #0F172A;">${companySize}</td></tr>
          </table>

          <h3 style="color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Current Business Challenge</h3>
          <div style="background-color: #F8FAFC; padding: 16px; border-radius: 12px; border: 1px solid #E2E8F0; font-size: 14px; line-height: 1.65; color: #334155; margin-bottom: 20px;">
            ${currentBusinessChallenge ? currentBusinessChallenge.replace(/\n/g, "<br/>") : "Not specified."}
          </div>

          ${message ? `<h3 style="color: #0052FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Additional Message</h3><div style="background-color: #F8FAFC; padding: 16px; border-radius: 12px; border: 1px solid #E2E8F0; font-size: 14px; line-height: 1.65; color: #334155;">${message.replace(/\n/g, "<br/>")}</div>` : ""}

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #F1F5F9; font-size: 11px; color: #94A3B8; font-family: monospace;">
            Product Interest: ${productName}<br/>
            Submitted At: ${timestamp}<br/>
            Source Page: ${sourcePage}
          </div>
        </div>
        <div style="background-color: #F1F5F9; padding: 16px; text-align: center; font-size: 11px; color: #64748B;">
          Delivered via Project Buddy ${productName} Early Access System
        </div>
      </div>
    `;

    // Client confirmation email
    const clientHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0F172A; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; background-color: #FFFFFF;">
        <div style="background: linear-gradient(135deg, #050917 0%, #0A1128 100%); color: #FFFFFF; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">PROJECT BUDDY — ${productName.toUpperCase()}</h2>
          <p style="margin: 4px 0 0 0; font-size: 11px; color: #38BDF8; text-transform: uppercase; font-family: monospace;">EARLY ACCESS CONFIRMATION</p>
        </div>
        <div style="padding: 28px;">
          <h3 style="margin-top: 0; color: #0F172A;">You're on the list, ${fullName}.</h3>
          <p style="font-size: 15px; line-height: 1.65; color: #334155;">
            Thank you for your interest in ${productName}. Our team will review your request and keep you informed as early access becomes available.
          </p>
          <div style="background-color: #F8FAFC; padding: 16px; border-radius: 12px; border: 1px solid #E2E8F0; margin: 20px 0;">
            <p style="margin: 0; font-size: 13px; color: #64748B;"><strong>Registered for:</strong> ${productName} — ${productTagline}</p>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #64748B;"><strong>Company:</strong> ${companyName}</p>
          </div>
          <p style="font-size: 14px; color: #475569;">
            If you have any questions in the meantime, reach us at <a href="mailto:hello@projectbuddy.co.in" style="color: #0052FF;">hello@projectbuddy.co.in</a>.
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
        subject: `${productName} Early Access Request — ${fullName} (${companyName})`,
        html: internalHtml,
      });

      if (internalRes.error) {
        console.error(`[${productName} Early Access — Resend Error]:`, internalRes.error);
        return NextResponse.json({ error: internalRes.error.message || "Email delivery failed." }, { status: 500 });
      }

      try {
        await resend.emails.send({
          from: emailFrom,
          to: [workEmail],
          subject: `You're on the ${productName} early access list — Project Buddy`,
          html: clientHtml,
        });
      } catch (clientErr) {
        console.warn(`[${productName} Early Access — Client Confirmation Warning]:`, clientErr);
      }
    } else {
      console.warn(`[${productName} Early Access] RESEND_API_KEY not set — email not sent.`);
    }

    return NextResponse.json({ success: true, message: "Request received." });
  } catch (error: any) {
    console.error("[Early Access Route Error]:", error);
    return NextResponse.json({ error: "Server error. Unable to process request." }, { status: 500 });
  }
}

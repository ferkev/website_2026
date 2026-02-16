import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false; // ✅ IMPORTANT for POST endpoints

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.RESEND_API_KEY;
    const contactEmail = import.meta.env.CONTACT_TO_EMAIL;
    const fromEmail = import.meta.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !contactEmail || !fromEmail) {
      return json({ error: "Server misconfigured (missing env vars)." }, 500);
    }

    const resend = new Resend(apiKey);
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return json({ error: "Missing fields (name/email/message)." }, 400);
    }

    // 1) Send to you
    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    // 2) Confirmation to user
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We received your request ✅",
      text: `Hi ${name},

        Thank you for reaching out!

        Your request has been successfully recorded and I will get back to you shortly.

        Best regards,
        Kevin LE FRANC
        Freelance Web Design & Dev`,
    });

    return json({ ok: true }, 200);
  } catch (err) {
    console.error("❌ /api/contact error:", err);
    return json(
      { error: err instanceof Error ? err.message : "Failed to send" },
      500,
    );
  }
};

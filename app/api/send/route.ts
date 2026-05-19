import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // API Key ရှိမရှိ စစ်ဆေးခြင်း
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Missing Resend API Key" }, { status: 500 });
    }

    // Email ပို့မည့် Setup
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Free tier မှာ ဒီအတိုင်းပဲ ထားရပါမယ်
      to: ["myothureinmin1991@gmail.com"], // 🎯 မင်းရဲ့ ဂျီမေးလ် အစစ်ကို ဒီမှာ ထည့်ပါ bro
      subject: `Contact Message from ${name}`,
      replyTo: email,
      html: `
        <h3>New Message from Portfolio Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
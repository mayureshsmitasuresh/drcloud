import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, course, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        pass: process.env.NEXT_PUBLIC_ADMIN_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"DrCloud" <${process.env.NEXT_PUBLIC_ADMIN_EMAIL}>`,
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL, // Admin receives mail
      subject: `New Course Inquiry: ${course}`,
      text: `
        New inquiry received:

        Course: ${course}
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
      `,
      html: `
        <h2>New Course Inquiry</h2>
        <p><b>Course:</b> ${course}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:${message || "N/A"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

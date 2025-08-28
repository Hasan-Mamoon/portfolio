import nodemailer from "nodemailer"

export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    console.log(process.env.EMAIL_USER)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'mianhassan085@gmail.com',
    subject: `Portfolio Contact: ${name}`,
    text: `From: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
}

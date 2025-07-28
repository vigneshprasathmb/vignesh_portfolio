"use server";
import nodemailer from "nodemailer";

export async function sendMail(prevData, formData) {
  const formValue = Object.fromEntries(formData);
  const { name, mail, mobile, requestMsg } = formValue;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.NEXT_EMAIL_USER, 
      pass: process.env.NEXT_EMAIL_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${mail}>`, // Shows requester name in inbox
      replyTo: mail, // Allows recipient to reply directly to the requester
      to: "vigneshprasathmb@gmail.com, hyphencode.trp@gmail.com",
      subject: "New Request",
      text: `Fullname: ${name}\nMail: ${mail}\nMobile: ${mobile}\nMessage: ${requestMsg}`,
      html: `<p><strong>Fullname:</strong> ${name}<br>
             <strong>Mail:</strong> ${mail}<br>
             <strong>Mobile:</strong> ${mobile}<br>
             <strong>Message:</strong> ${requestMsg}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: err.message };
  }
}

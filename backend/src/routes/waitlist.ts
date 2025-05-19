import express, { Request, Response } from "express";
import { WaitlistEntry } from "../models/WaitlistEntry";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req: Request, res: Response): Promise<any> => {
  const { email, name } = req.body;
  const emailTemplate = `<html>
  <body style="font-family: sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
      <h2 style="color: #000000;">Welcome to Twyt 👋</h2>
      <p>Hi ${name},</p>
      <p>Thanks for signing up to the waitlist! We're building something amazing to help you generate tweets just like a human (or even better 😏).</p>
      <p>You'll be the first to know when we launch!</p>
      <br/>
      <p>Stay tuned,</p>
      <p><strong>– The Twyt Team</strong></p>
      <hr style="margin: 30px 0;">
      <small style="color: #888;">You joined our waitlist using ${email}</small>
    </div>
  </body>
</html>
`;

  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const existing = await WaitlistEntry.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already on waitlist" });
    }

    const newEntry = new WaitlistEntry({ email });
    await newEntry.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Waitlist Confirmation",
      html : emailTemplate
    });

    res
      .status(201)
      .json({ message: "Email added to waitlist and confirmation sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

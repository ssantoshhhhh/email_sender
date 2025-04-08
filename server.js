const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Use your real credentials here
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "santoshwebtechnology@gmail.com",         // Your email
      pass: "rrrwivywutbdwxul",            // Your app password
    },
  });

  const mailOptions = {
    from: "santoshwebtechnology@gmail.com",
    to: email,
    subject: "Hello from React + Nodemailer!",
    text: "This is a test message sent from your application.",
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

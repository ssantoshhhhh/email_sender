import React, { useState } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa"; // ← Import GitHub Icon
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    if (!email) {
      setMessage("❗ Please enter an email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/send-email", {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Failed to send email.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Email Sender 💌</h1>
        <p className="subheading">Send a quick message to your email in one click.</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={sendEmail}>Send Email</button>

        {message && <p className="message">{message}</p>}

        <p className="note">🔒 We respect your privacy. Your email is not stored.</p>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} EmailSender App · Powered by React + NodeMailer</p>

        <a
          href="https://github.com/ssantoshhhhh/email_sender"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub size={32} />
        </a>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

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
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={sendEmail}>Send Email</button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;

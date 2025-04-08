import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/send-email", {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to send email.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Email Sender</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />
      <br />
      <button onClick={sendEmail} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Send
      </button>
      <p>{message}</p>
    </div>
  );
}

export default App;

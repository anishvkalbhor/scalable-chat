"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>💬 Scalable Chat Application</h1>

      <div className={classes.chatWindow}>
        <ul className={classes.messageList}>
          {messages.map((msg, i) => (
            <li key={i} className={classes.message}>
              <span className={classes.messageText}>{msg}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.inputArea}>
        <input
          className={classes.input}
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className={classes.sendButton}
          onClick={() => {
            if (message.trim()) sendMessage(message);
            setMessage("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

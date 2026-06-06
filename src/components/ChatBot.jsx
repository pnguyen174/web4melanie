import { useEffect, useRef, useState } from "react";
import botAvatar from "../assets/botavatar.jpeg";
import userAvatar from "../assets/useravatar.jpeg";

const options = [
  { label: "Hello 👋", reply: "Hey there cutie patootiee! 🩷" },
  { label: "How are you 💕 ?", reply: "I'm doing great, thanks for asking!" },
  { label: "Who are you?", reply: "I'm Peter's little chatbot 💕" },
  { label: "I love you ❤️ ", reply: "Aww, I love you too bebe! 🥰" },
  {
    label: "Do you love me??",
    reply: "YES OFC I LOVE YOU!! YOU ARE SO SILLY 😘",
  },
];

const defaultReply = "Aww, thanks for telling me that! You're the best 💕";

function getReplyForText(text) {
  const lower = text.trim().toLowerCase();
  if (!lower) return null;

  const match = options.find((o) => o.label.trim().toLowerCase() === lower);
  if (match) return match.reply;

  if (lower.includes("love")) return "I love you too, bebe! 🥰";
  if (lower.includes("hello") || lower.includes("hi"))
    return "Hey there cutie patootiee! 🩷";

  if (
    lower.includes("?") ||
    lower.includes("what") ||
    lower.includes("when") ||
    lower.includes("where") ||
    lower.includes("who") ||
    lower.includes("why") ||
    lower.includes("how") ||
    lower.includes("do")
  )
    return "Good question! You might want to ask Peter!! 🥰";

  return defaultReply;
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! What would you like to say?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function addExchange(userText, botText) {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userText },
      { from: "bot", text: botText },
    ]);
  }

  function sendMessage(label, reply) {
    addExchange(label, reply);
  }

  function sendTypedMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    addExchange(text, getReplyForText(text));
    setInput("");
  }

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 500,
        }}
      >
        💬 Ask me anything!
      </div>
      <div
        style={{
          height: 320,
          overflowY: "auto",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.from === "user" ? "flex-end" : "flex-start",
              display: "flex",
              alignItems: "flex-end",
              gap: 8,
              flexDirection: m.from === "user" ? "row-reverse" : "row",
            }}
          >
            <img
              src={m.from === "user" ? userAvatar : botAvatar}
              alt={m.from === "user" ? "User" : "Bot"}
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                background:
                  m.from === "user" ? "var(--accent)" : "var(--code-bg)",
                color: m.from === "user" ? "#fff" : "var(--text-h)",
                padding: "8px 12px",
                borderRadius: 10,
                maxWidth: "80%",
                fontSize: 14,
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div
        style={{
          padding: 12,
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {options.map((o, i) => (
          <button
            key={i}
            type="button"
            onClick={() => sendMessage(o.label, o.reply)}
            style={{
              padding: "8px 14px",
              borderRadius: 20,
              border: "1px solid var(--accent)",
              background: "var(--accent-bg)",
              color: "var(--accent)",
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            {o.label}
          </button>
        ))}
      </div>
      <form
        onSubmit={sendTypedMessage}
        style={{
          display: "flex",
          gap: 8,
          padding: 12,
          borderTop: "1px solid var(--border)",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: 20,
            border: "1px solid var(--border)",
            background: "var(--bg)",
            color: "var(--text-h)",
            fontSize: 14,
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          style={{
            padding: "10px 16px",
            borderRadius: 20,
            border: "none",
            background: "var(--accent)",
            color: "#fff",
            cursor: input.trim() ? "pointer" : "not-allowed",
            fontSize: 14,
            opacity: input.trim() ? 1 : 0.6,
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

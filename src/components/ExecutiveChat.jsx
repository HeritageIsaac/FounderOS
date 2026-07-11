import { useState } from "react";
import axios from "axios";
import "../css/executiveChat.css";
const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const executives = [
    {
        id: "CEO",
        name: "Atlas",
        role: "Chief Executive Officer",
        icon: "👨‍💼"
    },
    {
        id: "CFO",
        name: "Ledger",
        role: "Chief Financial Officer",
        icon: "💰"
    },
    {
        id: "CMO",
        name: "Pulse",
        role: "Chief Marketing Officer",
        icon: "📈"
    },
    {
        id: "COO",
        name: "Forge",
        role: "Chief Operations Officer",
        icon: "⚙️"
    }];

export default function ExecutiveChat({ report }) {

    const [executive, setExecutive] = useState(executives[0]);
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {

        if (!question.trim()) return;

        const userMessage = {
            sender: "user",
            text: question
        };

        setMessages(prev => [...prev, userMessage]);

        setLoading(true);

        try {

            const res = await axios.post(`${API_URL}/chat`, {
                executive: executive.id,
                question,
                report
            });

            console.log("FULL RESPONSE:", res.data);
            console.log("ANSWER:", res.data.answer);

            const aiMessage = {
                sender: "ai",
                text: res.data.answer
            };

            console.log("Adding AI message:", aiMessage);

            setMessages(prev => [...prev, aiMessage]);

        } catch (err) {

            console.log(err);

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "Sorry, I couldn't respond."
                }
            ]);

        }

        setQuestion("");
        setLoading(false);
    };



return (

    <div className="executive-chat">

        <h2>💬 Ask the Executive Board</h2>

        <div className="executive-tabs">

            {executives.map(exec => (

                <button

                    key={exec.id}

                    className={
                        executive.id === exec.id
                            ? "active"
                            : ""
                    }

                    onClick={() => setExecutive(exec)}
                >

                    <span>{exec.icon}</span>

                    <div>

                        <strong>{exec.name}</strong>

                        <small>{exec.role}</small>

                    </div>

                </button>

            ))}

        </div>

        <div className="chat-window">

            {messages.length === 0 && (

                <div className="welcome">

                    <h3>

                        {executive.icon} {executive.name}

                    </h3>

                    <p>

                        Ask me anything about your business.

                    </p>

                </div>

            )}

            {messages.map((msg, index) => (

                <div

                    key={index}

                    className={`message ${msg.sender}`}

                >

                    {msg.text}

                </div>

            ))}

            {loading && (

                <div className="message ai typing">

                    Thinking...

                </div>

            )}

        </div>

        <div className="chat-input">

            <input

                value={question}

                onChange={(e) => setQuestion(e.target.value)}

                placeholder={`Ask ${executive.name}...`}

                onKeyDown={(e) => {

                    if (e.key === "Enter") {

                        sendMessage();

                    }

                }}

            />

            <button onClick={sendMessage}>

                Send

            </button>

        </div>

    </div>

);

}
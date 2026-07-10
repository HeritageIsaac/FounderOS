import { useState } from "react";
import axios from "axios";
import "../css/executiveChat.css";

export default function ExecutiveChat({ analysis, report }) {

    const [executive, setExecutive] = useState("CEO");
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const askExecutive = async () => {

        if (!question.trim()) return;

        const userMessage = {
            sender: "user",
            text: question
        };

        setMessages(prev => [...prev, userMessage]);

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:5000/api/chat",
                {
                    executive,
                    question,
                    report,
                    analysis
                }
            );

            const aiMessage = {
                sender: executive,
                text: response.data.answer.answer
            };

            setMessages(prev => [...prev, aiMessage]);

            setQuestion("");

        } catch (err) {

            console.error(err);

            alert("Unable to contact Executive Board.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="executive-chat">

            <h2>💬 Ask the Executive Board</h2>

            <select
                value={executive}
                onChange={(e)=>setExecutive(e.target.value)}
            >
                <option>CEO</option>
                <option>CFO</option>
                <option>CMO</option>
                <option>COO</option>
            </select>

            <div className="chat-window">

                {
                    messages.length === 0 &&
                    <p className="placeholder">
                        Start a conversation with your AI executives.
                    </p>
                }

                {
                    messages.map((msg,index)=>(

                        <div
                            key={index}
                            className={
                                msg.sender==="user"
                                ?
                                "message user"
                                :
                                "message ai"
                            }
                        >

                            <strong>

                                {
                                    msg.sender==="user"
                                    ?
                                    "You"
                                    :
                                    msg.sender
                                }

                            </strong>

                            <p>{msg.text}</p>

                        </div>

                    ))
                }

            </div>

            <textarea

                placeholder="Ask your executive team..."

                value={question}

                onChange={(e)=>setQuestion(e.target.value)}

            />

            <button
                onClick={askExecutive}
                disabled={loading}
            >

                {
                    loading
                    ?
                    "Thinking..."
                    :
                    `Ask ${executive}`
                }

            </button>

        </div>

    );

}
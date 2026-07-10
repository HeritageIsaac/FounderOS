import { useNavigate } from "react-router-dom";
import "../css/home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">

        <h1>
          Your AI Executive Team
        </h1>

        <p>
          Upload your business reports and receive strategic
          recommendations from AI executives in minutes.
        </p>

        <button onClick={() => navigate("/dashboard")}>
          Start Analysis
        </button>

      </div>
    </div>
  );
}
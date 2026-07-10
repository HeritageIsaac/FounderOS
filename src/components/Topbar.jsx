import "../css/topbar.css";

export default function Topbar() {
  return (
    <header className="topbar">

      <div className="top-left">
        <h1>Dashboard</h1>
        <p>Your AI Executive Team is ready.
            
        </p>
      </div>

      <div className="top-right">

        <input
          type="text"
          placeholder="Search..."
        />

        <button className="notify">
          🔔
        </button>

        <button className="analyze">
          Analyze Report
        </button>

      </div>

    </header>
  );
}
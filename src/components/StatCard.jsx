import "./../css/statcard.css";

export default function StatCard({ title, value, color }) {
  return (
    <div className="stat-card">
      <small>{title}</small>

      <h2 style={{ color }}>{value}</h2>
    </div>
  );
}
import "./../css/executive.css";

export default function ExecutiveCard({
  name,
  role,
  advice,
}) {
  return (
    <div className="executive-card">
      <h3>{name}</h3>

      <small>{role}</small>

      <p>{advice}</p>
    </div>
  );
}
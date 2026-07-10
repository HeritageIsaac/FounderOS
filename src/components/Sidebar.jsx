import "./../css/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">FounderOS</h2>

      <ul>
        <li className="active">Dashboard</li>
        <li>Executive Board</li>
        <li>Reports</li>
        <li>Growth Plan</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}   
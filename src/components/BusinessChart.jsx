import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 16000 },
  { month: "Apr", revenue: 23000 },
  { month: "May", revenue: 28000 },
  { month: "Jun", revenue: 35000 },
];

export default function BusinessChart() {
  return (
    <div className="chart-card">
      <h2>Revenue Growth</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#222" />

          <XAxis dataKey="month" stroke="#888" />

          <YAxis stroke="#888" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#ff4b4b"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
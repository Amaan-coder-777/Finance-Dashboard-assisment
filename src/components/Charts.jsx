import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function Charts({ darkMode, transactions }) {

  // 📈 Line Chart Data (group by date)
  const lineMap = {};

  transactions.forEach((t) => {
    if (!lineMap[t.date]) lineMap[t.date] = 0;
    lineMap[t.date] += t.type === "income" ? t.amount : -t.amount;
  });

  const lineData = Object.keys(lineMap).map((date) => ({
    name: date,
    balance: lineMap[date],
  }));

  // 🥧 Pie Chart Data (category-wise expenses)
  const categoryMap = {};

  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      if (!categoryMap[t.category]) categoryMap[t.category] = 0;
      categoryMap[t.category] += t.amount;
    });

  const pieData = Object.keys(categoryMap).map((cat) => ({
    name: cat,
    value: categoryMap[cat],
  }));

  const COLORS = ["#8b5cf6", "#22c55e", "#facc15", "#ef4444", "#3b82f6"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      {/* 📈 Line Chart */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-xl transition">
        <h2 className="mb-4 font-semibold text-gray-800 dark:text-white">
          Balance Trend
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis stroke={darkMode ? "#ccc" : "#333"} dataKey="name" />
            <YAxis stroke={darkMode ? "#ccc" : "#333"} />
            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? "#1f2937" : "#fff",
                border: "none",
              }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#8b5cf6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🥧 Pie Chart */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-xl transition">
        <h2 className="mb-4 font-semibold text-gray-800 dark:text-white">
          Spending Breakdown
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={90} label>
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
    
  );
}

export default Charts;
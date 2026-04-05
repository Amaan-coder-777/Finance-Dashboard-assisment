import { useState } from "react";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [role, setRole] = useState("Viewer");
  const [transactions, setTransactions] = useState([]);

  return (
    <div
      className={
        darkMode
          ? "dark bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white"
          : "bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen"
      }
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        role={role}
        setRole={setRole}
      />

      <div className="p-6">
        <SummaryCards />
        <Charts darkMode={darkMode} transactions={transactions} />
        <Transactions
          role={role}
          transactions={transactions}
          setTransactions={setTransactions}
        />
        <Insights transactions={transactions} />
      </div>
    </div>

  );
}

export default App;
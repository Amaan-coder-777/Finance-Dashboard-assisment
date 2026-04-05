import { useState, useEffect } from "react";

const defaultData = [
  { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" },
];

function Transactions({ role, transactions, setTransactions })  {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    setTransactions(saved || defaultData);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Add transaction
  const handleAdd = () => {
    if (!form.date || !form.amount || !form.category) return;

    const newTx = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([newTx, ...transactions]);
    setForm({ date: "", amount: "", category: "", type: "expense" });
  };

  // Delete
  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Filter + Search
  let filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "all" || t.type === filter)
  );

  // Sorting
  if (sort === "amount") {
    filtered.sort((a, b) => b.amount - a.amount);
  } else {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Transactions
      </h2>

      {/* ➕ Add Transaction (Admin only) */}
      {role === "Admin" && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
          <input
            type="date"
            className="p-2 border rounded dark:bg-gray-700"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <input
            type="number"
            placeholder="Amount"
            className="p-2 border rounded dark:bg-gray-700"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            className="p-2 border rounded dark:bg-gray-700"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <select
            className="p-2 border rounded dark:bg-gray-700"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button
            onClick={handleAdd}
            className="bg-purple-500 text-white rounded hover:scale-105 transition"
          >
            Add
          </button>
        </div>
      )}

      {/* 🔍 Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded dark:bg-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 border rounded dark:bg-gray-700"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          className="p-2 border rounded dark:bg-gray-700"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      {/* 📋 Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b dark:border-gray-600">
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role === "Admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map((t) => (
              <tr key={t.id} className="border-b dark:border-gray-700">
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td>₹{t.amount}</td>
                <td>{t.type}</td>

                {role === "Admin" && (
                  <td>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}

export default Transactions;
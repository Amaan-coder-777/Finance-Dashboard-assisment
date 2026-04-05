function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-xl shadow hover:scale-105 transition duration-300">
        <h2 className="text-lg">Total Balance</h2>
        <p className="text-2xl font-bold">₹50,000</p>
      </div>

      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-xl shadow hover:scale-105 transition duration-300">
        <h2 className="text-lg">Income</h2>
        <p className="text-2xl font-bold">₹70,000</p>
      </div>

      <div className="bg-gradient-to-r from-red-400 to-red-600 text-white p-6 rounded-xl shadow hover:scale-105 transition duration-300">
        <h2 className="text-lg">Expenses</h2>
        <p className="text-2xl font-bold">₹20,000</p>
      </div>

    </div>
  );
}

export default SummaryCards;
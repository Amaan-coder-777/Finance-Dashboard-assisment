function Insights({ transactions }) {

  const expenses = transactions.filter(t => t.type === "expense");
  const income = transactions.filter(t => t.type === "income");

  // Total expense
  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

  // Total income
  const totalIncome = income.reduce((sum, t) => sum + t.amount, 0);

  // Savings
  const savings = totalIncome - totalExpense;

  // Top category
  const categoryMap = {};
  expenses.forEach(t => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  let topCategory = "N/A";
  let max = 0;

  for (let cat in categoryMap) {
    if (categoryMap[cat] > max) {
      max = categoryMap[cat];
      topCategory = cat;
    }
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Top Category */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <h3 className="text-gray-600 dark:text-gray-300">Top Category</h3>
        <p className="text-xl font-bold text-purple-600 mt-2">
          {topCategory}
        </p>
      </div>

      {/* Monthly Expense */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <h3 className="text-gray-600 dark:text-gray-300">Monthly Expense</h3>
        <p className="text-xl font-bold text-red-500 mt-2">
          ₹{totalExpense}
        </p>
      </div>

      {/* Savings */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <h3 className="text-gray-600 dark:text-gray-300">Savings</h3>
        <p className="text-xl font-bold text-green-500 mt-2">
          ₹{savings}
        </p>
      </div>

    </div>
  );
}

export default Insights;
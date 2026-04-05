# 💰 Finance Dashboard UI

## 🚀 Overview

This project is a Finance Dashboard UI built using React.
It helps users track their financial activity by showing balance, transactions, and spending insights in a clean and interactive interface.

The focus of this project is on frontend design, component structure, and state management, without relying on a backend.

---

## 🛠 Tech Stack

* React.js (JavaScript)
* Tailwind CSS
* Recharts

---

## ✨ Features

### 📊 Dashboard Overview

* Summary cards (Total Balance, Income, Expenses)
* Line chart for balance trend
* Pie chart for spending breakdown

### 📋 Transactions

* View list of transactions
* Add new transactions (Admin only)
* Delete transactions (Admin only)
* Search by category
* Filter by income/expense
* Sort by date or amount

### 🔐 Role-Based UI

* Viewer → can only view data
* Admin → can add and delete transactions

### 📈 Insights

* Top spending category
* Total expenses
* Savings calculation
* Automatically updates based on data

### 🎨 UI/UX

* Clean and modern design (Axio-inspired)
* Fully responsive layout
* Dark mode / Light mode toggle
* Hover effects and smooth transitions

### 💾 Data Persistence

* Uses localStorage to save transactions
* Data remains after page refresh

---

## ⚙️ Installation & Setup

```bash
npm install
npm run dev
```

---

## 🌐 Live Demo

Versel is used for free deployment of this project , with live project link :-

    =>      "https://finance-dashboard-assisment.vercel.app/"   (Click/copy this link to see live project.)


---

## 📌 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── SummaryCards.jsx
 │    ├── Charts.jsx
 │    ├── Transactions.jsx
 │    └── Insights.jsx
 ├── App.jsx
 └── index.css
```

---

## 🧠 Approach

* Built using reusable React components
* Managed state using React hooks (`useState`, `useEffect`)
* Used mock data and local storage for simplicity
* Focused on clean UI and user-friendly interactions

---

## 📎 Notes

* This project is frontend-only
* No backend or database is used
* Designed to demonstrate UI/UX and frontend skills

---

## 👨‍💻 Author

Amaan Shaikh

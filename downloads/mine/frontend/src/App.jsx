import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import { useState } from "react";
import axios from "axios";

function App() {
  const expenses = [
    {
      date: "2025-01-05",
      title: "Lunch with team",
      amount: 350,
      category: "food",
    },
    {
      date: "2025-01-07",
      title: "Bike Petrol",
      amount: 500,
      category: "petrol",
    },
    {
      date: "2025-01-10",
      title: "Online Course Subscription",
      amount: 1200,
      category: "education",
    },
    {
      date: "2025-01-12",
      title: "Mobile Recharge",
      amount: 299,
      category: "recharge",
    },
  ];

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const getExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/expenses");
      console.log(response);
    } catch (error) {
      alert("Error fetching expenses:", error);
      console.log(error);
    }
  };

  getExpenses();

  return (
    <div className="app-container">
      <header className="header">
        <h1>💸 Budgify - Expense Tracker</h1>
        <p>Your personal finance companion</p>
        {!showExpenseForm && (
          <button className="btn" onClick={() => setShowExpenseForm(true)}>
            + Add Expense
          </button>
        )}
      </header>
      {showExpenseForm && (
        <ExpenseForm onCancel={() => setShowExpenseForm(false)} />
      )}
      <section className="expense-list">
        <h2>📊 Tracked Expenses</h2>
        <div className="expense-grid">
          {expenses.map((expense, index) => (
            <div key={index} className="expense-card">
              <div className="expense-header">
                <h3>{expense.title}</h3>
                <div className="icon-buttons">
                  <button className="icon-btn" title="Edit">
                    ✏️
                  </button>
                  <button className="icon-btn" title="Delete">
                    🗑️
                  </button>
                </div>
              </div>

              <p className="amount">₹{expense.amount}</p>
              <p className="date">
                {new Date(expense.date).toLocaleDateString()}
              </p>
              <span className="tag">{expense.category}</span>
            </div>
          ))}
        </div>
      </section>
      ;
    </div>
  );
}

export default App;

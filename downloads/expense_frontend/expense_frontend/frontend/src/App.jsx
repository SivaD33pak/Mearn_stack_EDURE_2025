import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [expenses, setExpenses] = useState([ ]);

  const [showForm, setShowForm] = useState(false);
  
  const getExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/expense');
      console.log(response);
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };



  const addExpenseHandler = (expense) => {
    setExpenses((e) => [expense, ...e]);
    setShowForm(false);
  };

  useEffect(()=>{  getExpenses()}, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>💸 Budgify - Expense Tracker</h1>
        <p>Your smart path to financial freedom</p>
        {!showForm && (
          <button className="btn" onClick={() => setShowForm(true)}>
            + Add Expense
          </button>
        )}

        {showForm && (
          <ExpenseForm
            onCancel={() => setShowForm(false)}
            onAddExpense={addExpenseHandler}
          />
        )}  

      </header>
      
      <section className="expense-list">
        <h2>📊 Tracked Expenses</h2>
          <div className="expense-grid">
            {expenses.map((expense, index) => (
              <div key={index} className="expense-card">
                <div className="expense-header">
                  <h3>{expense.title}</h3>
                  <div className="icon-buttons">
                    <button
        
                      className="icon-btn"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                  
                      className="icon-btn"
                      title="Delete"
                    >
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
    </div>
  )
}

export default App;

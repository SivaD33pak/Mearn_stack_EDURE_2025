import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  return (
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
                <button
                  className="icon-btn"
                  title="Delete"
                  onClick={() => {
                    deleteExpense(expense._id);
                  }}
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
  );
}

export default ExpenseList;

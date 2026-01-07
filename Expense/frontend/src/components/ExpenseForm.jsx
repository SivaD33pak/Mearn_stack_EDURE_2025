import { useState } from "react";

function ExpenseForm({ onCancel, onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("select");

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
      category,
    };

    onAddExpense(expenseData);

    console.log("Expense Data:", expenseData);

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("food");
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 120"
            required
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="new-expense__control">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option> Select</option>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="emi">EMI</option>
          </select>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;

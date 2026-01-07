import React from "react";
import { useState } from "react";

export default function ExpenseForm({ onCancel }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("food");

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
      category: category,
    };

    console.log(expenseData);
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="e.g. 120"
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Category</label>
          <select required onChange={(e) => setCategory(e.target.value)}>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="EMI">EMI</option>
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

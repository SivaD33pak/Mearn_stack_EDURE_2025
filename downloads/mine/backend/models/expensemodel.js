import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;

import express from "express";
import connectDB from "./config/db.js";
import Expense from "./models/expenseModel.js";
import Detail from "./models/myDetailsModel.js";
import cors from "cors";

const app = express();
const port = 3000;
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hel word!");
});

app.get("/siva", (req, res) => {
  res.json([{ name: "siva", age: 21 }]);
});

app.post("/expense", async (req, res) => {
  try {
    const { title, desc, amount, date, category } = req.body;
    const createExpense = await Expense.create({
      title,
      desc,
      amount: Number(amount),
      date: date ? new Date(date) : new Date(),
      category,
    });
    res.status(201).json(createExpense);
  } catch (err) {
    console.error("Failed to create expense", err);
    res.status(400).json({ error: "Failed to create expense" });
  }
});

app.get("/expense", async (req, res) => {
  console.log();
  const findExpense = await Expense.find({}).exec();
  console.log(findExpense);
  res.json(findExpense);
});

app.post("/detail", async (req, res) => {
  const createDetail = await Detail.create({
    name: "Siva Deepak",
    age: 21,
    address: "123, Main Street, Cityville",
    DOB: "2004-04-30",
    gender: "Male",
    phoneNumber: 1234567890,
    email: "you@gmail.com",
    password: 1234567890,
  });
  console.log(createDetail);
  res.json(createDetail);
});

app.get("/detail", async (req, res) => {
  const findDetail = await Detail.find({}).exec();
  console.log(findDetail);
  console.log(findDetail);
  res.json(findDetail);
});

app.delete("/expense/:id", async (req, res) => {
  const deleteExpense = await Expense.findByIdAndDelete(req.params.id);
  console.log(deleteExpense);
  console.log(req.params.id);
  res.send("Deleted");
});

app.patch("/expense/:id", async (req, res) => {
  try {
    const updateExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updateExpense);
  } catch (err) {
    console.error("Failed to update expense", err);
    res.status(400).json({ error: "Failed to update expense" });
  }
});

app.listen(port, () => {
  console.log(`something on port ${port}`);
});

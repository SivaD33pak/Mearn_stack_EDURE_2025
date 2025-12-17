import express from "express";
import connectDB from "./config/db.js";
import Details from "./models/mydetails.js";
import Expense from "./models/expensemodel.js";

connectDB();

const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/expense", async (req, res) => {
  const createExpense = await Expense.create({
    title: "sample",
    desc: "sample desc",
    date: new Date(),
    amount: 1000,
  });
  console.log(createExpense);
  res.json(createExpense);
});

app.get("/expense", async (req, res) => {
  const variableExpense = await Expense.find({});
  console.log(variableExpense);
  res.json(variableExpense);
});

app.post("/details", async (req, res) => {
  const mdetails = await Details.create({
    Name: "Siva Deepak",
    email: "siva@@gmail.com",
    dateofbirth: "2004-08-20",
    place: "12345",
  });
  console.log(mdetails);
  res.json(mdetails);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";
import studentDetails from "./models/student.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();
const port = 4000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/student", async (req, res) => {
  console.log(req);
  console.log("Request Body:");
  console.log(req.body);

  const createStudent = await studentDetails.create({
    Name: req.body.Name,
    Rnumber: req.body.Rnumber,
    Email: req.body.Email,
    Course: req.body.Course,
    Branch: req.body.Branch,
    Status: req.body.Status,
  });
  console.log(createStudent);
  res.json(createStudent);
});

app.delete("/Student/:id", async (req, res) => {
  console.log(req.params.id);
  const deleteStudent = await studentDetails.findByIdAndDelete(req.params.id);
  res.json(deleteStudent);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

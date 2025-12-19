import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Rnumber: {
    type: String,
  },
  Email: {
    type: String,
  },
  Course: {
    type: String,
  },
  Branch: {
    type: String,
  },
  Status: {
    type: String,
  },
});

const studentDetails = mongoose.model("studentDetails", detailSchema);

export default studentDetails;

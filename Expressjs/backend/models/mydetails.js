import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  email: {
    type: String,
  },
  place: {
    type: Number,
  },
  dateofbirth: {
    type: Date,
  },
});

const Details = mongoose.model("Details", detailSchema);

export default Details;

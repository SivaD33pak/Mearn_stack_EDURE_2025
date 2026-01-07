import mongoose from "mongoose";

const myDetailsSchema = mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    address:{
        type:String,
    },
    DOB:{
        type:Date,
    },
    gender:{
        type:String,
    },
    phoneNumber:{
        type:Number,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
});

const Detail = mongoose.model('Detail',myDetailsSchema);

export default Detail;
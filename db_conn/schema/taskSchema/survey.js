const mongoose = require("mongoose");
const linkSchema = new mongoose.Schema({
    status:String,
    date:String,
    question1:String,
    question2:String,
    question3:String,
    question4:String,
    question5:String,
    baseAmount:String,
    userComplete:[String],
})
module.exports=linkSchema
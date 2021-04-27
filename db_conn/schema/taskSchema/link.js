const mongoose = require("mongoose");
const linkSchema = new mongoose.Schema({
    status:String,
    task:String,
    link:String,
    date:String,
    baseAmount:String,
    userComplete:[String],
})
module.exports=linkSchema
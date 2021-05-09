const mongoose = require("mongoose");
const picSchema = new mongoose.Schema({
    status:String,
    picture:String,
    date:String,
    baseAmount:String,
    description:String,
    userComplete:[String],
})
module.exports=picSchema
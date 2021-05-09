const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    status:String,
    topic:String,
    words:Number,
    description:String,
    date:String,
    baseAmount:String,
    userComplete:[String],
})
module.exports=blogSchema
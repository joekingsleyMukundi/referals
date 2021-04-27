const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    status:String,
    topic:String,
    words:Number,
    date:String,
    baseAmount:String,
    userComplete:[String],
})
module.exports=blogSchema
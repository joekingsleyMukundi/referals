const mongoose = require("mongoose");
const withdrowalSchema = new mongoose.Schema({
    userid:String,
    userName:String,
    usernumber:String,
    amount:String,
    date:String,
    aproved:Boolean,
    transactionCode:String,
})
module.exports=withdrowalSchema
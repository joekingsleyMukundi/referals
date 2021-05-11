const mongoose = require("mongoose");
const upgradeSchema = new mongoose.Schema({
    userid:String,
    userName:String,
    usernumber:String,
    amount:String,
    date:String,
    aproved:Boolean,
    transactionCode:String,
})
module.exports=upgradeSchema
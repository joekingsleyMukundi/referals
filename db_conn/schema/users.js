const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:String,
    fullname:String,
    password:String,
    userProfilePic:String,
    phone:Number,
    email:String,
    otp:String,
    likes:[String],
    uplineId:String,
    downlineIds:[{
        date:String,
        id:String,
    }],
    verified:Boolean,
    regDate:String,
    package:String,
    balance:Number, 
    pendingWithdrowal:Number,
    uplineId:String,
})
module.exports=userSchema
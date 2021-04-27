const mongoose = require("mongoose");
const invitationsSchema = new mongoose.Schema({
    status:String,
    date:String,
    invites:Number,
    baseAmount:String,
    userComplete:[String],
})
module.exports=invitationsSchema
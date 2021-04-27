const mongoose = require("mongoose");
const userSchema = require("../schema/users")
const User = ()=>{
    const User = new mongoose.model("User",userSchema)
    return User
}
module.exports=User
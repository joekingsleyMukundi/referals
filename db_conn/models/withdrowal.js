const withdrowalSchema =require ("../schema/withdrowals")
const mongoose = require("mongoose");
const withdrowalModel = ()=>{
    const Withdrowal = new mongoose.model("Withdrowal",withdrowalSchema)
    return Withdrowal
}
module.exports=withdrowalModel
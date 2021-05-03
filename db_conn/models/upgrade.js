const upgradeSchema =require ("../schema/upgrade")
const mongoose = require("mongoose");
const upgradeModel = ()=>{
    const Upgrade = new mongoose.model("Upgrade",upgradeSchema)
    return Upgrade
}
module.exports=upgradeModel
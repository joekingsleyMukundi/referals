const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../db_conn/models/taskModel/taskModel")
const balanceUpdate = require("./switchlogic")
const balanceIncrement = (app,user,req,res,basePrice,model,found,task,today)=>{
    switch (user.package) {
        case "Basic":
            balanceUpdate(app,req,res,found,task,0,model,today)
            break;
        case "Osmium":
            balanceUpdate(app,req,res,found,task,basePrice,model,today)
            break;
        case "Iridium":
            let newBalance = basePrice*3
            balanceUpdate(app,req,res,found,task,newBalance,model,today)
            break;
        case "Rhodium":
            newBalance = basePrice*10
            balanceUpdate(app,req,res,found,task,newBalance,model,today)
            break;
        case "Ruthenium":
            newBalance = basePrice*30
            balanceUpdate(app,req,res,found,task,newBalance,model,today)
            break;
        case "Palladium":
            newBalance = basePrice*80
            balanceUpdate(app,req,res,found,task,newBalance,model,today)
            break;
        case "Platinum":
            newBalance = basePrice*120
            balanceUpdate(app,req,res,found,task,newBalance,model,today)
            break;
        case "Silver":
            newBalance = basePrice*160
            balanceUpdate(app,req,res,found,task,newBalance,model,today)
            break;
        case "Gold":
            newBalance = basePrice*300
            balanceUpdate(app,req,res,found,task,newBalance,model,today)
            break;
    }
}
module.exports=balanceIncrement
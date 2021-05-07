const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../db_conn/models/taskModel/taskModel")
const balanceUpdate = require("./switchlogic")
const balanceIncrement = (app,user,req,res,basePrice,model,found,task,today)=>{
    switch (user.package) {
        case "Basic":
            balanceUpdate(app,req,res,found,task, 1.5,model,today)
            break;
        case "Osmium":
            balanceUpdate(app,req,res,found,task,basePrice,model,today)
            break;
        case "Iridium":
            let newBalance = basePrice*3
            balanceUpdate(app,req,res,found,task,newBalance,model,today)
            break;
        case "Rhodium":
            let newBalanceR = basePrice*10
            balanceUpdate(app,req,res,found,task,newBalanceR,model,today)
            break;
        case "Ruthenium":
            let newBalanceRu = basePrice*30
            balanceUpdate(app,req,res,found,task,newBalanceRu,model,today)
            break;
        case "Palladium":
            let newBalanceP = basePrice*80
            balanceUpdate(app,req,res,found,task,newBalanceP,model,today)
            break;
        case "Platinum":
            let newBalancePl = basePrice*120
            balanceUpdate(app,req,res,found,task,newBalancePl,model,today)
            break;
        case "Silver":
            let newBalanceS = basePrice*160
            balanceUpdate(app,req,res,found,task,newBalanceS,model,today)
            break;
        case "Gold":
            let newBalanceG = basePrice*300
            balanceUpdate(app,req,res,found,task,newBalanceG,model,today)
            break;
    }
}
module.exports=balanceIncrement
const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../db_conn/models/taskModel/taskModel")
const {earningMail} = require("../../mails/sendmail") 
const completeTaskApiController = require("../apis_routes/completetask")
const dashboardApiController = require("../apis_routes/dashboard")
const User = require("../../db_conn/models/users")
const balanceUpdate = (app,req,res,found,task,bal,model,today)=>{
    dashboardApiController(app)
    completeTaskApiController(app)
    if(found.userComplete.includes(req.user.id)){
        req.flash("message","This task has aready been completed,Please come back tomorrow.You can also join our advanced packages or invite friends and makesure  they join any package so that you can earn incentives")
        res.redirect(`/tasks/${task}`)
   }
    else{
        const newBal = req.user.balance + Number(bal)
        User().updateOne({_id:req.user.id},{balance:newBal},(err)=>{
            if (err) {
                console.log(err)
            } else {
                    model().updateOne({date:today},{$push:{userComplete:req.user.id}},(err)=>{
                        if (err) {
                            console.log(err)
                        } else {
                            earningMail(req.user.email,req.user.username,bal)
                            res.redirect("/dashboard")
                        }
                    })
                
            }
        })
      
    }
}
module.exports = balanceUpdate
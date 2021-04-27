const withdrowalModel = require("../../db_conn/models/withdrowal")
const User = require("../../db_conn/models/users")
const homeApiController = require("./home")
const dashboardApiController = require("./dashboard")
const {approvedMail} = require("../../mails/sendmail")
const confirmationListApiController = (app)=>{
    app.route("/confirmationslist")
        .get((req,res)=>{
            homeApiController(app)
            dashboardApiController(app)
            if (req.isAuthenticated()) {
                if (req.user.phone!=00500) {
                    withdrowalModel().find({aproved:false},(err,docs)=>{
                        if (err) {
                            console.log(err)
                        }else{
                            res.render("confirmwithdrowal",{docs:docs,user:req.user})
                        }
                    })
                } else {
                    res.redirect("/dashboard")
                }
            }else{
                res.redirect("/")
            }
        })
    app.route("/api/confirm/:id")
    .get((req,res)=>{
        const transactionId = req.params.id
        withdrowalModel().findById({_id:transactionId},(err,found)=>{
            if(err){
                console.log(err)
            }else{
                User().findById({_id:found.userid},(err,user)=>{
                    if (err) {
                        console.log(err) 
                    } else {
                        const newPendingBalance =user.pendingWithdrowal-found.amount
                        User().updateOne({_id:found.userid},{pendingWithdrowal:newPendingBalance},(err)=>{
                        if(err){
                            console.log(err)
                        } else{
                            withdrowalModel().updateOne({_id:transactionId},{aproved:true},(err)=>{
                                if (err) {
                                    console.log(err)
                                } else {
                                    approvedMail(user.email,user.username,found.amount,transactionId)
                                res.redirect("/confirmationslist")
                                }
                            })
                        }
                        })
                    }
                    
                })
                
            }
        })

    })
}

module.exports = confirmationListApiController
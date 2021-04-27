const withdrowalModel = require("../../db_conn/models/withdrowal")
const randomString = require("../../utils/transactionCode")
const dashboardApiController = require("../../conrollers/apis_routes/dashboard")
const date = require ("../../utils/date")
const homeApiController = require("./home")
const UserModel = require("../../db_conn/models/users")
const {withdrowalMail} = require("../../mails/sendmail")
const withdrowalApiController = (app)=>{
    app.route("/withdraw")
        .get((req,res)=>{
            homeApiController(app)
            if (req.isAuthenticated()) {
                withdrowalModel().find({userid:req.user.id},(err,request)=>{
                    if (err) {
                        console.log(err)
                    } else {
                        res.render("withdraw",{user:req.user,message:req.flash("message"),docs:request})
                    }
                })
            }else{
              res.redirect("/")  
            }
            
        })
    app.route("/api/withdraw")
        .post((req,res)=>{
            dashboardApiController(app)
            if(req.isAuthenticated()){
                if(req.body.amount<=req.user.balance){
                    var today = new Date();
                if(today.getDay() == 1 || today.getDay() == 2){
                    const todayDate = date()
                    const transIdorg = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
                    const transId = transIdorg.slice(0,9)
                    const withdraw ={
                        userid:req.user.id,
                        userName:req.user.username,
                        usernumber:req.user.phone,
                        amount:req.body.amount,
                        date:todayDate,
                        aproved:false,
                        transactionCode:transId,
                    }
                    withdrowalModel().create(withdraw,(err,data)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log(data)
                            const newBalance = req.user.balance-req.body.amount
                            const newPendingOrder = Number(req.user.pendingWithdrowal) + Number(req.body.amount)
                            UserModel().updateOne({_id:req.user.id},{balance:newBalance,pendingWithdrowal:newPendingOrder},(err)=>{
                                if (err) {
                                    console.log(err)
                                }else{
                                    withdrowalMail(req.user.email,req.user.username,req.body.amount,transId)
                                    res.redirect("/dashboard")
                                }
                            })
                            
                        }

                    })
                }else{
                    res.redirect("/withdraw")
                };
                }else{
                    req.flash("message","you cant withdraw more than you have as balance.Please check your balance and try again")
                    res.redirect("/withdraw")
                }
                
               
            }else{
                res.redirect("/")
            }
           
        })
}

module.exports= withdrowalApiController
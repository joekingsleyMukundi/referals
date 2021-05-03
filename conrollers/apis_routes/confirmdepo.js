 const upgradeModel = require("../../db_conn/models/upgrade")
 const date = require("../../utils/date")
 const {packageAprovalMail,referalBonusMail} = require("../../mails/sendmail")
 const User = require("../../db_conn/models/users")
 const homeApiController = require("./home")
 const depositListApiController = (app)=>{
     app.route("/depositelist")
        .get((req,res)=>{
            homeApiController(app)
            if (req.isAuthenticated()) {
                upgradeModel().find({aproved:false},(err,docs)=>{
                    if (err) {
                        console.log(err)
                    } else {
                        res.render("depolist",{docs:docs,user:req.user})
                    }
                })
            } else {
              res.redirect("/")  
            }
        })
    app.route("/api/deposit/confirm/:id")
        .get((req,res)=>{
            const id = req.params.id
            upgradeModel().updateOne ({_id:id},{aproved:true},(err)=>{
                if (err) {
                    console.log(err)
                } else {
                    upgradeModel().findById({_id:id},(err,item)=>{
                        if (err) {
                            console.log(err)
                        } else {
                            User().findById({_id:item.userid},(err,user)=>{
                                if (err) {
                                    console.log(err)
                                } else {
                                    var myCurrentDate=new Date();
                                    var myFutureDate=new Date(myCurrentDate);
                                        myFutureDate.setDate(myFutureDate.getDate()+ 60)
                                    var dd = String(myFutureDate.getDate()).padStart(2, '0');
                                    var mm = String(myFutureDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                                    var yyyy = myFutureDate.getFullYear();
                                
                                    let expDate = mm + '/' + dd + '/' + yyyy;
                                    User().updateOne({_id:user.id},{package:item.package,packageExp:expDate},(err)=>{
                                        if (err) {
                                            console.log(err)
                                        } else {
                                            packageAprovalMail(user.email,user.username,item.package)
                                            const newBal = Number(item.amount)*0.05
                                            if (user.uplineId ==="") {
                                                res.redirect("/depositelist")
                                            }else{
                                                User().updateOne({_id:user.uplineId},{balance:newBal},(err)=>{
                                                    if (err) {
                                                        console.log(err)
                                                    } else {
                                                        User().findById({_id:user.uplineId},(err,upline)=>{
                                                            if (err) {
                                                                console.log(err)
                                                            } else {
                                                                referalBonusMail(upline.email,upline.username,item.package,newBal,user.username)
                                                                res.redirect("/depositelist")
                                                            }
                                                           
                                                        })
                                                       
                                                    }
                                                })
                                               
                                            }
                                            
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
 module.exports=depositListApiController
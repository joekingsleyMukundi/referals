const User = require("../../db_conn/models/users")
const {packageAprovalMail,referalBonusMail} = require("../../mails/sendmail")
const referabonous =(user,req,res,package,pkgAmount)=>{
    User().findById({_id:user.id},(err,user)=>{
        if (err) {
            console.log(err)
        } else {
            var myCurrentDate=new Date();
            var myFutureDate=new Date(myCurrentDate);
                myFutureDate.setDate(myFutureDate.getDate()+ 60)
            const options= {day:'numeric', month:'long', year:"numeric", timeZone: 'Africa/Nairobi'};

        
            let expDate =myFutureDate.toLocaleDateString("en-IN", options); 
            User().updateOne({_id:user.id},{package:package,packageExp:expDate},(err)=>{
                if (err) {
                    console.log(err)
                } else {
                    packageAprovalMail(user.email,user.username,package)
                    const newBal = Number(pkgAmount)*0.05
                    if (user.uplineId ==="") {
                        console.log("no upline")
                    }else{
                        User().findById({_id:user.uplineId},(err,upline)=>{
                            if (err) {
                                console.log(err)
                            } else {
                                const newBalance = upline.balance + newBal
                                User().updateOne({_id:user.uplineId},{balance:newBalance},(err)=>{
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        referalBonusMail(upline.email,upline.username,package,newBal,user.username)
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
module.exports=referabonous
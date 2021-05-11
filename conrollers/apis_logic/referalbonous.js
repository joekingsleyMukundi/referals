const User = require("../../db_conn/models/users")
const referabonous =(req,res,package,pkgAmount)=>{
    User().findById({_id:req.user.id},(err,user)=>{
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
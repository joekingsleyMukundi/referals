const passport = require("passport")
const User = require("../../db_conn/models/users")
const otpGen = require("../../utils/otp")
const time = require("../../functions/dateTime")
const {registerMail} = require("../../mails/sendmail")
const date = require("../../utils/date")
const registerApiLogic = (req,res)=>{
    const otp = otpGen()
    const regTime = time()
    User().register({
        username:req.body.username,
        fullname:req.body.fullname,
        phone:req.body.phone,
        email:req.body.email,
        userProfilePic:req.file.path,
        otp:otp,
        verified:false,
        regDate:regTime,
        balance:0,
        package:'Basic',
        pendingWithdrowal:0,
        uplineId:req.body.uplineid,
    },req.body.password,(err,user)=>{
        if(err){
            console.log(err)
        }else{
            registerMail(req.body.email,req.body.username,otp)
            if (req.body.uplineid==="") {
                passport.authenticate("local")(req,res,()=>{
                    req.flash("message","succefully registered please check your email and get the otp")
                    res.redirect("/otp")
                })
            }else{
                passport.authenticate("local")(req,res,()=>{
                    const today = date()
                    const downlinedata = {
                        date:today,
                        id:req.user.id,
                    }
                    User().updateOne({_id:req.body.uplineid},{$push:{downlineIds:downlinedata}},(err)=>{
                        if (err) {
                            console.log(err)
                        }else{
                            req.flash("message","succefully registered please check your email and get the otp")
                            res.redirect("/otp")
                        }
                    })
                    
                })
                
            }
            
        }
    }
    )
}
module.exports = registerApiLogic
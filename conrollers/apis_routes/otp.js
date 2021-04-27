const User = require("../../db_conn/models/users")
const homeApiController = require("./home")
const loginApiController = require("./login")
const otpApiController = (app)=>{
    app.route("/otp")
        .get((req,res)=>{
            homeApiController(app)
            if(req.isAuthenticated()){
                res.render("otp",{
                    message:req.flash("message")
                })
            }else{
                res.redirect("/")
            }
        })
        .post((req,res)=>{
            homeApiController(app)
            loginApiController(app)
            if(req.isAuthenticated()){
                User().findById({_id:req.user.id},(err,user)=>{
                    const otpSubmited= req.body.otp;
                    if(user.otp == otpSubmited){
                        User().updateOne({_id:req.user.id},{verified:true},(err)=>{
                            if(err){
                                console.log(err)
                            }else{
                                req.flash("message","succefully registered welcome on board")
                                res.redirect("/login")
                            }
                        })
                    }else{
                        req.flash("message","wrong otp")
                        res.redirect("/otp")
                    }
                })
            }else{
                res.redirect("/")
            }    
        })
}
module.exports=otpApiController
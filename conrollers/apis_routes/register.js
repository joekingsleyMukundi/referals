const User = require("../../db_conn/models/users")
const otpApiController= require("./otp")
const registerApiLogic = require("../apis_logic/register")
const registerApiController = (app,upload)=>{
    app.route("/register")
        .get((req,res)=>{
            const upline = req.query
            res.render("register",{ message:req.flash("message"),upline:upline})
        })
        .post(upload.single("profilePic"),(req,res)=>{
             otpApiController(app)
            User().find({phone:req.body.phone},(err,user)=>{
                if (!err) {
                    if(user.length!=0){
                        if(req.body.uplineid == " "){
                            req.flash("message","the phone number exists use another number")
                            res.redirect("/register")
                        }else{
                            req.flash("message","the phone number exists use another number")
                            res.redirect(`/register?id=${req.body.uplineid}&user=${req.body.uplineuser}`)
                        }
                        
                    }else{
                        User().find({email:req.body.email},(err,user)=>{
                            if (!err) {
                                if (user.length!=0) {
                                    if(req.body.uplineid == " "){
                                        req.flash("message","the email exists use another email")
                                        res.redirect("/register")
                                    }else{
                                        req.flash("message","the email exists use another email")
                                        res.redirect(`/register?id=${req.body.uplineid}&user=${req.body.uplineuser}`)
                                    }
                                }else{
                                    User().find({username:req.body.username},(err,user)=>{
                                        if(!err){
                                            if(user.length !=0){
                                                if(req.body.uplineid == " "){
                                                    req.flash("message","the username exists use another name")
                                                    res.redirect("/register")
                                                }else{
                                                    req.flash("message","the username exists use another name")
                                                    res.redirect(`/register?id=${req.body.uplineid}&user=${req.body.uplineuser}`)
                                                }

                                            }else{
                                                registerApiLogic(req,res)
                                            }
                                        }
                                    })
                                    
                                }
                            }
                        })
                    }
                }else{
                    console.log(err)
                }
            })
        })
}
module.exports=registerApiController
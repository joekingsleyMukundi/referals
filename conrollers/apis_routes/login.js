const UserModel = require("../../db_conn/models/users")
const dashboardApiController = require("./dashboard")
const passport = require("passport")
const loginApiController = (app)=>{
    app.route("/login")
        .get((req,res)=>{
            res.render("login",{message:req.flash("message")})
        })
        .post((req,res)=>{
            dashboardApiController(app)
            const User = UserModel()
            User.find({username:req.body.username},(err,user)=>{
                if (err) {
                    console.log(err)
                } else {
                   if (user.length != 0 ) {
                    const user = User({
                        username:req.body.username,
                        password:req.body.passsword,
                    })
                    req.login(user,(err)=>{
                        if(err){
                            console.log(err)
                        }else{
                            passport.authenticate("local")(req,res,()=>{
                               res.redirect("dashboard")
                            })
                        }
                    })
                   } else {
                       req.flash("message","the usernamse you have entered does not exist")
                       res.redirect("/login")
                   } 
                }
            })
           
        })
}
module.exports = loginApiController
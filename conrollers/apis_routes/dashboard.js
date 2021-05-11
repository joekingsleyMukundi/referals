const homeApiController = require("./home")
const withdrowalModel = require("../../db_conn/models/withdrowal")
const dashboardApiController = (app)=>{
    app.route("/dashboard")
        .get((req,res)=>{
            homeApiController(app)
            if(req.isAuthenticated()){
                withdrowalModel().find({userid:req.user.id},(err,docs)=>{
                    if (err) {
                        console.log(err)
                    } else {
                        res.render("dashboard",{user:req.user,docs:docs,message:req.flash("message")})
                    }
                })
            }else{
                res.redirect("/")
            }
            
        })
}
module.exports=dashboardApiController
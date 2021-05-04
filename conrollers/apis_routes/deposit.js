const upgradeModel = require("../../db_conn/models/upgrade")
const date = require("../../utils/date")
const {depositMail} = require ("../../mails/sendmail")
const homeApiController = require("./home")
const plansApiController = (app)=>{
    app.route("/upgrade_plan/:package")
        .get((req,res)=>{
            homeApiController(app)
            if (req.isAuthenticated()) {
                const package =req.params.package
                res.render("make_deposit",{user:req.user,package:package,message:req.flash("message")})
            }else{
                res.redirect("/")
            }
           
        })
    app.route("/upgrade_to/:package")
        .post((req,res)=>{
            homeApiController(app)
            if (req.isAuthenticated()) {
                const datetoday = date()
                const package =  req.params.package
                const MCode = req.body.code
                const docs = {
                    userid:req.user.id,
                    userName:req.user.username,
                    usernumber:req.user.phone,
                    amount:req.body.amount,
                    date:datetoday,
                    aproved:false,
                    transactionCode:MCode,
                    package:package,
                }
                upgradeModel().create(docs,(err,data)=>{
                    if (err) {
                        console.log(err)
                    } else {
                        depositMail(req.user.fullname,req.user.phone,req.user.amount,MCode,package)
                        req.flash("message","Your request has been sent awaiting confirmation  and upgrade go back to the dashboard we will send you an email of confirmation");
                        res.redirect(`/upgrade_plan/${package}`)
                    }
                })
            } else {
                req.redirect("/")
            }
           
            
        })
}
module.exports=plansApiController
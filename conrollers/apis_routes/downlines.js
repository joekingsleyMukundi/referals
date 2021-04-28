const UserModel = require("../../db_conn/models/users")
const confirmationListApiController = require("./confirmationlist")
const homeApiController = require("./home")
const downlinesApiController = (app)=>{
    app.route("/myreferrals")
     .get((req,res)=>{
        homeApiController(app)
         if (req.isAuthenticated()) {
             const Downlines=  req.user.downlineIds
             const newarry = Downlines.map(id =>{
                 return id.id
             })
            UserModel().find({"_id":{$in:newarry}},(err,users)=>{
                if (err) {
                    console.log(err)
                } else {
                   res.render("referrals",{downlines:users,user:req.user})
                }
            })
            
          
         } else {
            res.redirect("/") 
         }
     })
}

module.exports=downlinesApiController
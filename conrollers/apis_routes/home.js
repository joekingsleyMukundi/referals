const User = require("../../db_conn/models/users")
const homeApiController = (app)=>{
    app.route("/")
        .get((req,res)=>{
            if(req.isAuthenticated()){
                User().find({package:"Gold"},(err,users)=>{
                    if (err) {
                        console.log(err)
                    } else {
                        res.render("index",{users:users,user:req.user,status:"signedup"})
                    }
                })
            }else{
                User().find({package:"Gold"},(err,users)=>{
                    if (err) {
                        console.log(err)
                    } else {
                        res.render("index",{users:users,status:"signedout"})
                    }
                }) 
            }
           
           
        })
}
module.exports=homeApiController
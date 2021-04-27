const User = require("../../db_conn/models/users")
const homeApiController = (app)=>{
    app.route("/")
        .get((req,res)=>{
            User().find({package:"Gold"},(err,users)=>{
                if (err) {
                    console.log(err)
                } else {
                    res.render("index",{users:users})
                }
            })
           
        })
}
module.exports=homeApiController
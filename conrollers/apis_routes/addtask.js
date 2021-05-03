const taskApisLogic=require("../apis_logic/tasks")
const homeApiController = require("./home")
const adminTaskApiController = (app)=>{
    app.route("/addtask")
        .get((req,res)=>{
            homeApiController(app)
            if (req.isAuthenticated()) {
                taskApisLogic(req,res,"addtask")
            } else {
                res.redirect("/")
            }
            
            
        })
}
module.exports=adminTaskApiController
const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../db_conn/models/taskModel/taskModel")
const homeApiController = require("./home")
const taskApisLogic=require("../apis_logic/tasks")
const taskApiController = (app)=>{
    app.route("/mytasks")
        .get((req,res)=>{
            homeApiController(app)
            if (req.isAuthenticated()) {
                taskApisLogic(req,res,"my_task")
            }else{
                res.redirect("/")
            }
        })
}
module.exports = taskApiController
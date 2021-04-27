const taskApisLogic=require("../apis_logic/tasks")
const adminTaskApiController = (app)=>{
    app.route("/addtask")
        .get((req,res)=>{
            taskApisLogic(req,res,"addtask")
            
        })
}
module.exports=adminTaskApiController
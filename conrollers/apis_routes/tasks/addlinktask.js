const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../../db_conn/models/taskModel/taskModel")
const date= require("../../../utils/date")
const adminTaskApiController = require("../addtask")
const addlinkApi = (app)=>{
    app.route("/addlinktask")
        .post((req,res)=>{
            adminTaskApiController(app)
            const docs = {
                status:"active",
                task:req.body.task,
                link:req.body.link,
                date:date(),
                baseAmount:req.body.baseamount,
            }
            linkModel().create(docs,(err,data)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(data)
                    res.redirect("/addtask")
                }
            })
        })
}
module.exports=addlinkApi
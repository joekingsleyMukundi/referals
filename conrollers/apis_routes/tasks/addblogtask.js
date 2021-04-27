const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../../db_conn/models/taskModel/taskModel")
const date= require("../../../utils/date")
const adminTaskApiController = require("../addtask")
const addblogApi = (app)=>{
    app.route("/addblogtask")
        .post((req,res)=>{
            adminTaskApiController(app)
            const docs = {
                status:"active",
                topic:req.body.blogtopic,
                words:req.body.wordsno,
                date:date(),
                baseAmount:req.body.baseamount,
            }
            blogModel().create(docs,(err,data)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(data)
                    res.redirect("/addtask")
                }
            })
        })
}
module.exports=addblogApi
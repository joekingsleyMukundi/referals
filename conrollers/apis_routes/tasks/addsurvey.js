const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../../db_conn/models/taskModel/taskModel")
const date= require("../../../utils/date")
const adminTaskApiController = require("../addtask")
const addsurveyApi = (app,upload)=>{
    app.route("/addsurvaytask")
        .post((req,res)=>{
            adminTaskApiController(app)
            const docs = {
                status:"active",
                question1:req.body.question1,
                question2:req.body.question2,
                question3:req.body.question3,
                question4:req.body.question4,
                question5:req.body.question5,
                date:date(),
                baseAmount:req.body.baseamount,
            }
            surveyModel().create(docs,(err,data)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(data)
                    res.redirect("/addtask")
                }
            })
        })
}
module.exports=addsurveyApi
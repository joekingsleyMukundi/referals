const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../../db_conn/models/taskModel/taskModel")
const date= require("../../../utils/date")
const adminTaskApiController = require("../addtask")
const addpicApi = (app,upload)=>{
    app.route("/addpicturetask")
        .post(upload.single("picshare"),(req,res)=>{
            adminTaskApiController(app)
            const docs = {
                status:"active",
                picture:req.body.link,
                date:date(),
                description:req.body.desc,
                baseAmount:req.body.baseamount,
            }
            picModel().create(docs,(err,data)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(data)
                    res.redirect("/addtask")
                }
            })
        })
}
module.exports=addpicApi
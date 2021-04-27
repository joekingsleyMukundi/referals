const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../../db_conn/models/taskModel/taskModel")
const date= require("../../../utils/date")
const adminTaskApiController = require("../addtask")
const addinviteApi = (app)=>{
    app.route("/addinvitationtask")
        .post((req,res)=>{
            adminTaskApiController(app)
            const docs = {
                status:"active",
                invites:req.body.inviteno,
                date:date(),
                baseAmount:req.body.baseamount,
            }
            inviteModel().create(docs,(err,data)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(data)
                    res.redirect("/addtask")
                }
            })
        })
}
module.exports=addinviteApi
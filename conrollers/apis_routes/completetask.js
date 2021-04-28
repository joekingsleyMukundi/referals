const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../db_conn/models/taskModel/taskModel")
const homeApiController = require("./home")
const date= require("../../utils/date")
const taskApiController=require("./task")
const completeTaskApiController = (app)=>{
    app.route("/tasks/:name")
        .get((req,res)=>{
            const datetoday = date()
            homeApiController(app)
            taskApiController(app)
            if (req.isAuthenticated()) {
               const name = req.params.name
               if (name=="blog") {
                blogModel().find({date:datetoday},(err,tasks)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(tasks.length!=0){
                            tasks.forEach(task=>{
                                //payment
                                res.render("completetask",{user:req.user,task:task,taskType:"blog",message:req.flash("message")})
                            })
                        }else{
                            req.flash("message","please contact the admin on this it seems the task should not be indicated")
                            res.redirect("/mytasks")
                        }
                    }
                })
               } else if(name=="invite") {
                inviteModel().find({date:datetoday},(err,tasks)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(tasks.length!=0){
                            tasks.forEach(task=>{
                                res.render("completetask",{user:req.user,task:task,taskType:"invite",message:req.flash("message")})
                            })
                        }else{
                            req.flash("message","please contact the admin on this it seems the task should not be indicated")
                            res.redirect("/mytasks")
                        }
                    }
                })
               } else if(name=="link") {
                linkModel().find({date:datetoday},(err,tasks)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(tasks.length!=0){
                            tasks.forEach(task=>{
                                
                                res.render("completetask",{user:req.user,task:task,taskType:"link",message:req.flash("message")})
                            })
                        }else{
                            req.flash("message","please contact the admin on this it seems the task should not be indicated")
                            res.redirect("/mytasks")
                        }
                    }
                })
               } else if(name=="pic") {
                picModel().find({date:datetoday},(err,tasks)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(tasks.length!=0){
                            tasks.forEach(task=>{
                                res.render("completetask",{user:req.user,task:task,taskType:"pic",message:req.flash("message")})
                            })
                        }else{
                            req.flash("message","please contact the admin on this it seems the task should not be indicated")
                            res.redirect("/mytasks")
                        }
                    }
                })
               } else if(name=="survey") {
                surveyModel().find({date:datetoday},(err,tasks)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(tasks.length!=0){
                            tasks.forEach(task=>{
                                res.render("completetask",{user:req.user,task:task,taskType:"survey",message:req.flash("message")})
                            })
                        }else{
                            req.flash("message","please contact the admin on this it seems the task should not be indicated")
                            res.redirect("/mytasks")
                        }
                    }
                })
               }
            }else{
                res.redirect("/")
            }
        })
}
module.exports = completeTaskApiController
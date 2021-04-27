const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../db_conn/models/taskModel/taskModel")
const date= require("../../utils/date")
const taskApisLogic = (req,res,routepath)=>{
    const datetoday = date()
    let activeTasks = []
          
    blogModel().find({date:datetoday},(err,task)=>{
        if(task.length!=0){
            activeTasks.push("blog")
            inviteModel().find({date:datetoday},(err,task)=>{
                if (task.length!=0) {
                    activeTasks.push("invite")
                    linkModel().find({date:datetoday},(err,task)=>{
                        if(task.length!=0){
                            activeTasks.push("link")
                            picModel().find({date:datetoday},(err,task)=>{
                                if (task.length!=0) {
                                    activeTasks.push("pic")
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`1 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`2 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                        
                                    })
                                } else {
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`3 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`4 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                }
                            })
                        }else{
                            picModel().find({date:datetoday},(err,task)=>{
                                if (task.length!=0) {
                                    activeTasks.push("pic")
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`5 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`6 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                } else {
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`7 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`8 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                }
                            })
                        }
                    })
                    
                } else {
                    linkModel().find({date:datetoday},(err,task)=>{
                        if(task.length!=0){
                            activeTasks.push("link")
                            picModel().find({date:datetoday},(err,task)=>{
                                if (task.length!=0) {
                                    activeTasks.push("pic")
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`9 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`10 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    }) 
                                } else {
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`11 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`12 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                }
                            })
                        }else{
                            picModel().find({date:datetoday},(err,task)=>{
                                if (task.length!=0) {
                                    activeTasks.push("pic")
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`13 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`14 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                } else {
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`15 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`16 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                }
                            })
                        }
                    })
                    
                }
            })
        }else{
            inviteModel().find({date:datetoday},(err,task)=>{
                if (task.length!=0) {
                    activeTasks.push("invite")
                    linkModel().find({date:datetoday},(err,task)=>{
                        if(task.length!=0){
                            activeTasks.push("link")
                            picModel().find({date:datetoday},(err,task)=>{
                                if (task.length!=0) {
                                    activeTasks.push("pic")
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`17 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`18 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                } else {
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`19 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`20 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                }
                            })
                        }else{
                            picModel().find({date:datetoday},(err,task)=>{
                                activeTasks.push("pic")
                                if (task.length!=0) {
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`21 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`22 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                } else {
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`23 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`24 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                }
                            })
                        }
                    })
                    
                } else {
                    linkModel().find({date:datetoday},(err,task)=>{
                        if(task.length!=0){
                            activeTasks.push("link")
                            picModel().find({date:datetoday},(err,task)=>{
                                if (task.length!=0) {
                                    activeTasks.push("pic")
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`25 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`26 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                } else {
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`25 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`26 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                }
                            })
                        }else{
                            picModel().find({date:datetoday},(err,task)=>{
                                if (task.length!=0) {
                                    activeTasks.push("pic")
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`27 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`28 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                } else {
                                    surveyModel().find({date:datetoday},(err,task)=>{
                                        if(task.length!=0){
                                            activeTasks.push("survey")
                                            console.log(`29 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }else{
                                            console.log(`30 ${activeTasks}`)
                                            res.render(routepath,{user:req.user,activetasks:activeTasks,date:datetoday,message:req.flash("message")})
                                        }
                                    })
                                }
                            })
                        }
                    })
                    
                }
            })
        }
    })
}
module.exports= taskApisLogic
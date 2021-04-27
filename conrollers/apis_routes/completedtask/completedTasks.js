const  {blogModel,inviteModel,linkModel,picModel,surveyModel} = require("../../../db_conn/models/taskModel/taskModel")
const User = require("../../../db_conn/models/users")
const date= require("../../../utils/date")
const blogcompletetask = require("../completetask")
const dashboardApiController = require("../dashboard")
const completeTaskApiController = require("../completetask")
const balanceIncrement = require("../../apis_logic/copletedtaskswitchstmt")
const completedBlogApiController = (app)=>{
    app.route("/task/:name")
        .post((req,res)=>{
            blogcompletetask(app)
            dashboardApiController(app)
            completeTaskApiController(app)
            const name = req.params.name
            const today = date()
            const blog = req.body.blog
            if (name=="blogcompletetask") {              
                blogModel().findOne({date:today},(err,found)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(found){
                            const basePrice = found.baseAmount
                            User().findById({_id:req.user.id},(err,user)=>{
                                if (err) {
                                    console.log(err)
                                }else{
                                    balanceIncrement(app,user,req,res,basePrice,blogModel,found,"blog",today)
                                }
                            })
                        }
                    }
                })
            }else if(name=="invitecompletetask"){
                inviteModel().findOne({date:today},(err,found)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(found){
                            const downlines= req.user.downlineIds
                            
                            let results= downlines.filter(x => x.date==today)
                           if (results.length >= found.invites) {
                            const basePrice = found.baseAmount
                            User().findById({_id:req.user.id},(err,user)=>{
                                if (err) {
                                    console.log(err)
                                }else{
                                    balanceIncrement(app,user,req,res,basePrice,inviteModel,found,"invite",today)
                                }
                            })  
                           }else{
                               req.flash("message","please invite the  people and make sure they join")
                               res.redirect("/tasks/invite")
                           }
                          
                        }
                    }
                })
            }else if(name=="sharelinkcompletetask"){
                linkModel().findOne({date:today},(err,found)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(found){
                            const basePrice = found.baseAmount
                            User().findById({_id:req.user.id},(err,user)=>{
                                if (err) {
                                    console.log(err)
                                }else{
                                    balanceIncrement(app,user,req,res,basePrice,linkModel,found,"link",today)
                                }
                            })  
                          
                          
                        }
                    }
                })
            }else if(name=="sharepiccompletetask"){
                picModel().findOne({date:today},(err,found)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(found){
                            const basePrice = found.baseAmount
                            User().findById({_id:req.user.id},(err,user)=>{
                                if (err) {
                                    console.log(err)
                                }else{
                                    balanceIncrement(app,user,req,res,basePrice,picModel,found,"pic",today)
                                }
                            })  
                          
                          
                        }
                    }
                })
            }else if(name=="surveycompletetask"){
                surveyModel().findOne({date:today},(err,found)=>{
                    if(err){
                        console.log(err)
                    }else{
                        if(found){
                            const basePrice = found.baseAmount
                            User().findById({_id:req.user.id},(err,user)=>{
                                if (err) {
                                    console.log(err)
                                }else{
                                    balanceIncrement(app,user,req,res,basePrice,surveyModel,found,"survey",today)
                                }
                            })  
                          
                          
                        }
                    }
                })
            }
        });
    }
module.exports=completedBlogApiController
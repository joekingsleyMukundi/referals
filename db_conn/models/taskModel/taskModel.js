const blogSchema = require("../../schema/taskSchema/blogtask")
const inviteSchema = require("../../schema/taskSchema/invitations")
const linkSchema = require("../../schema/taskSchema/link")
const picSchema = require("../../schema/taskSchema/picture")
const surveySchema = require("../../schema/taskSchema/survey")
const mongoose = require("mongoose");

const blogModel = ()=>{
    const Blogtask = new mongoose.model("Blogtask",blogSchema)
    return Blogtask
}
const inviteModel = ()=>{
    const Invite = new mongoose.model("Invite",inviteSchema)
    return Invite
}
const linkModel = ()=>{
    const Link = new mongoose.model("Link",linkSchema)
    return Link
}
const picModel = ()=>{
    const Pic = new mongoose.model("Pic",picSchema)
    return Pic
}
const surveyModel = ()=>{
    const Survey = new mongoose.model("Survey",surveySchema)
    return Survey
}

module.exports = {blogModel,inviteModel,linkModel,picModel,surveyModel}
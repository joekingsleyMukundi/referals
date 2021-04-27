const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = require("./schema/users")
const mongoUrl = "mongodb+srv://admin-joe:Mukundijoe254@cluster0.8n1fz.mongodb.net/jackdb"
const db = () =>{
    mongoose.connect(mongoUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
    })
    .then(()=>{
        console.log("success")
    })
    .catch ((error)=>{
        console.log(error)
    })
    
    const db = mongoose.connection
    if(db){
        console.log("success")
    }else{
        console.log("error")
    }

  mongoose.set("useCreateIndex", true);

  userSchema.plugin(passportLocalMongoose);

}
module.exports=db
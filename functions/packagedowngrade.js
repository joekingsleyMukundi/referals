const downgradeFtn = ()=>{
    const User = require("../db_conn/models/users")
    const date = require("../utils/date")
    const {downgradeMail} = require("../mails/sendmail")
    const today = date()
    User().find({packageExp:today},(err,users)=>{
        if (err) {
            console.log(err)
    } else {
            if (users.length !=0) {
            users.forEach(user => {
                User.findById({_id:user.id},{package:"Basic"},(err)=>{
                    if (err) {
                        console.log(err)
                    } else {
                        downgradeMail(user.username,user.email)
                    }
                })
            }); 
            }
        }
    })
}

module.exports=downgradeFtn
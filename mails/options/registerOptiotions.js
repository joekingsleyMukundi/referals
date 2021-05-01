const registerOptions = (email,fullname,otp)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Successfull registration",
        html: `<b>Welcome on board🎉🎉🙌. ${fullname} your one time pin is ${otp}.</b>`,
    }
    return options
}
module.exports =registerOptions
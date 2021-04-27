const registerOptions = (email,fullname,otp)=>{
    let options = {
        from: "meitneriumtrade@gmail.com",
        to: email,
        subject: "Successfull registration",
        text: `Welcome on board. ${fullname} your one time pin is ${otp}.`,
    }
    return options
}
module.exports =registerOptions
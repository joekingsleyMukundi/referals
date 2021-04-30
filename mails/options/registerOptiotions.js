const registerOptions = (email,fullname,otp)=>{
    let options = {
        from:'"Goldline" <goldline@coursecleared.com>',
        to: email,
        subject: "Successfull registration",
        text: `<p>Welcome on board. ${fullname} your one time pin is ${otp}.</p>`,
    }
    return options
}
module.exports =registerOptions
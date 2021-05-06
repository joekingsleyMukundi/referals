const registerOptions = (email,fullname,otp)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Successfull registration",
        html: `<p><b>Congraduations and welcome on board ${fullname}</b>🎉🎉🙌<br>.Your one time pin is ${otp}.We first want to welcome you to our community<br>
        We are the best option and we are glad you have joined us.<br>We have packages that you can enroll to, More info on our landing page:<br>
        https://www.goldlinebreeze.com</p>`,
    }
    return options
}
module.exports =registerOptions
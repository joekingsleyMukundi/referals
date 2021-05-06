const registerOptions = (email,fullname,otp)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Successfull registration",
        html: `<p><b>Congraduations and welcome on board ${fullname}</b>🎉🎉🙌<br>.Your one time pin is ${otp}.We first want to welcome you to our community<br>
        We are the best option and we are glad you have joined us.<br>We have packages that you can enroll to, More info on our landing page:<br>
        https://www.goldlinebreeze.com<br><br>
        For any clarifications, please  do not hesitate  to contact the  undersigned  via  <b>EMAIL</b><br><br>
        <b>support@goldlinebreeze.com.</b><br><b>https://www.facebook.com/Goldenbreezetechnology1<b><br><b>https://twitter.com/LineBreeze?ref_src=twsrc%5Etfw<b><br><b>https://wa.link/f5v967</b> <br>
        <br>Thank you <br><br>
        Yours Faithfully<br><br>
        <b>GoldlineBreeze</b></p>`,
    }
    return options
}
module.exports =registerOptions
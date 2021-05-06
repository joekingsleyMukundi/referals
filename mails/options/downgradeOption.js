const downgradeOptions = (fullname,email)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Subscription end",
        html:  `<p><b>Hello ${fullname}</b><br>We are sad to tell you that your account subcription package has come to an <b> end <b> please login and subscribe a new: <br>
        https://www.goldlinebreeze.com/login </p>`,
    }
    return options
}
module.exports =downgradeOptions
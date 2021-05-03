const downgradeOptions = (fullname,email)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Confirm depo",
        html: `<b>Dear ${fullname} your current package subscription has come to an end .You have automatically been downgraded to Basic if you wish to go back to the subscription please please upgrade  again.Thank you </b>`,
    }
    return options
}
module.exports =downgradeOptions
const referalBonusOption = (email,fullname,package,amount,downline)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Referal bonus",
        html:  `<p><b>Congratulations ${fullname}</b><br> You have recieved ${amount},today  from  ${downline} who has subscribed for ${package} .The details are as follows <br>
        Downline :  ${downline}.<br> Amount Earned : ${amount}.<br> Package : ${package}.<br> Login to your account  and confirm this transaction: <br>
        https://www.goldlinebreeze.com/login</p>`,
    }
    return options
}
module.exports =referalBonusOption
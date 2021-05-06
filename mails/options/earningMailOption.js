const earningOption = (email,fullname,earning)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Earnings",
        html:  `<p><b>Congratulations ${fullname}</b><br> You have earned ${amount},today  and  the details are as follows <br>
        Transaction Code : ${transactionid}.<br> Amount Earned : ${amount}.<br> Login to your account  and confirm this transaction: <br>
        https://www.goldlinebreeze.com/login</p>`,
    }
    return options
}
module.exports =earningOption
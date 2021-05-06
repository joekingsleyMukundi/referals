const withdrowalOptions = (email,fullname,amount, transactionid)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Pending Withdrawal",
        html: `<p><b>Congratulations ${fullname}</b><br> You have requested a withdrawal of ${amount} successfully  and  the details are as follows <br>
        Transaction Code : ${transactionid}.<br> Amount to be withdrawn : ${amount}.<br>Please wait patiently as we proccess your request.<br> Login to your account  and track this transaction: <br>
        https://www.goldlinebreeze.com/login</p>`
    }
    return options
}
module.exports =withdrowalOptions
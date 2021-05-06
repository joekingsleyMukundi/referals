const approvedOptions = (email,fullname,amount, transactionid)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Approved Withdrawal",
        html: `<p><b>Congratulations ${fullname}</b><br> Your withdrawal request of ${amount},has been aproved and  the details are as follows <br>
        Transaction Code : ${transactionid}.<br> Amount Earned : ${amount}.<br> You will recieve  your payment in a moment.</p>`
    }
    return options
}
module.exports =approvedOptions
const approvedOptions = (email,fullname,amount, transactionid)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Approved Withdrawal",
        html: `<p><b>Congratulations ${fullname}</b><br> Your withdrawal request of ${amount},has been aproved and  the details are as follows <br>
        Transaction Code : ${transactionid}.<br> Amount Earned : ${amount}.<br> You will recieve  your payment in a moment.<br><br>
        For any clarifications, please  do not hesitate  to contact the  undersigned  via  <b>EMAIL</b><br><br>
        support@goldlinebreeze.com.<br>https://www.facebook.com/Goldenbreezetechnology1<br>https://twitter.com/LineBreeze?ref_src=twsrc%5Etfw<br>https://wa.link/f5v967 <br>
        <br>Thank you <br><br>
        Yours Faithfully<br><br>
        GoldlineBreeze</p>`
    }
    return options
}
module.exports =approvedOptions
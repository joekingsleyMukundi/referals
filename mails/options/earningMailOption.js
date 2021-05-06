const earningOption = (email,fullname,earning)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Earnings",
        html:  `<p><b>Congratulations ${fullname}</b><br> You have earned ${amount},today  and  the details are as follows <br>
        Transaction Code : ${transactionid}.<br> Amount Earned : ${amount}.<br> Login to your account  and confirm this transaction: <br>
        https://www.goldlinebreeze.com/login<br><br>
        For any clarifications, please  do not hesitate  to contact the  undersigned  via  <b>EMAIL</b><br><br>
        <b>support@goldlinebreeze.com.</b><br><b>https://www.facebook.com/Goldenbreezetechnology1<b><br><b>https://twitter.com/LineBreeze?ref_src=twsrc%5Etfw<b><br><b>https://wa.link/f5v967</b> <br>
        <br>Thank you <br><br>
        Yours Faithfully<br><br>
        <b>GoldlineBreeze</b></p>`,
    }
    return options
}
module.exports =earningOption
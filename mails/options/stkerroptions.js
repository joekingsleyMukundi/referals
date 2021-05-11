const stkOptions = (fullname,email,message)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Mpesa Error",
        html:  `<p><b>Hello ${fullname}</b><br>We are sad to tell you that your mpesa payment has failed whith this message:${message} <br>
      please coordinate with that message . <br><br>
        For any clarifications, please  do not hesitate  to contact the  undersigned  via  <b>EMAIL</b><br><br>
        <b>support@goldlinebreeze.com.</b><br><b>https://www.facebook.com/Goldenbreezetechnology1<b><br><b>https://twitter.com/LineBreeze?ref_src=twsrc%5Etfw<b><br><b>https://wa.link/f5v967</b> <br>
        <br>Thank you <br><br>
        Yours Faithfully<br><br>
        <b>GoldlineBreeze</b></p>`,
    }
    return options
}
module.exports =stkOptions
const depositOptions = (fullname,number,amount, transactionid,package)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: "goldenbreezetechnology@gmail.com",
        subject: "Confirm depo",
        html: `<b>.Transaction ${transactionid}.We have a new upgrade request from ${number},under the name of ${fullname}.The request is  to upgrade to ${package} and has sent ${amount}.</b><br><br>
        For any clarifications, please  do not hesitate  to contact the  undersigned  via  <b>EMAIL</b><br><br>
        <b>support@goldlinebreeze.com.</b><br><b>https://www.facebook.com/Goldenbreezetechnology1<b><br><b>https://twitter.com/LineBreeze?ref_src=twsrc%5Etfw<b><br><b>https://wa.link/f5v967</b> <br>
        <br>Thank you <br><br>
        Yours Faithfully<br><br>
        <b>GoldlineBreeze</b></p>`,
    }
    return options
}
module.exports =depositOptions
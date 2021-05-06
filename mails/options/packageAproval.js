const pacakgeAprovalOption = (email,fullname,package)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Package Aproval",
        html: `<p><b>Hello ${fullname}</b><br>We are excited to tell you that your account subcription  has been  <b> upgraded <b> to ${package} please login and start enjoying your profits  for the next 60 days: <br>
        https://www.goldlinebreeze.com/login <br><br>
        For any clarifications, please  do not hesitate  to contact the  undersigned  via  <b>EMAIL</b><br><br>
        <b>support@goldlinebreeze.com.</b><br><b>https://www.facebook.com/Goldenbreezetechnology1<b><br><b>https://twitter.com/LineBreeze?ref_src=twsrc%5Etfw<b><br><b>https://wa.link/f5v967</b> <br>
        <br>Thank you <br><br>
        Yours Faithfully<br><br>
        <b>GoldlineBreeze</b></p>`,
    }
    return options
}
module.exports =pacakgeAprovalOption
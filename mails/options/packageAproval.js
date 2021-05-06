const pacakgeAprovalOption = (email,fullname,package)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Package Aproval",
        html: `<p><b>Hello ${fullname}</b><br>We are excited to tell you that your account subcription  has been  <b> upgraded <b> to ${package} please login and start enjoying your profits  for the next 60 days: <br>
        https://www.goldlinebreeze.com/login </p>`,
    }
    return options
}
module.exports =pacakgeAprovalOption
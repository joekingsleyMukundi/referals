const earningOption = (email,fullname,earning)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Earnings",
        html: `<b>Hello ${fullname} you have earned ${earning} from  GOLD LINE BREEZE TECHNOLOGY 🎉✨🎊🎉💥.</b>`,
    }
    return options
}
module.exports =earningOption
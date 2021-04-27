const earningOption = (email,fullname,earning)=>{
    let options = {
        from: "meitneriumtrade@gmail.com",
        to: email,
        subject: "Earnings",
        text: `Hello ${fullname} you have earned ${earning} from GOLD LINE BREEZE TECHNOLOGY.`,
    }
    return options
}
module.exports =earningOption
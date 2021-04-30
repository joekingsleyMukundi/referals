const earningOption = (email,fullname,earning)=>{
    let options = {
        from: '"Goldline" <goldline@coursecleared.com>',
        to: email,
        subject: "Earnings",
        text: `<p>Hello ${fullname} you have earned ${earning} from  GOLD LINE BREEZE TECHNOLOGY.</p>`,
    }
    return options
}
module.exports =earningOption
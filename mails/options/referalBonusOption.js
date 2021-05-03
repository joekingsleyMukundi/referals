const referalBonusOption = (email,fullname,package,amount,downline)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Referal bonus",
        html: `<b>Hello ${fullname} you have recieved ${amount} from ${downline} who has enrolled for ${package} package. </b>`,
    }
    return options
}
module.exports =referalBonusOption
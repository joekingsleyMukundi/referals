const approvedOptions = (email,fullname,amount, transactionid)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Approved Withdrawal",
        html: `<b>${transactionid}, ${fullname} confirmed your withdrawal request of amount ${amount} has been approved you will receive your money soon💸.</b>`
    }
    return options
}
module.exports =approvedOptions
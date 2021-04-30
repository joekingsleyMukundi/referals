const approvedOptions = (email,fullname,amount, transactionid)=>{
    let options = {
        from: '"Goldline" <goldline@coursecleared.com>',
        to: email,
        subject: "Approved Withdrowal",
        text: `<p>${transactionid} Hurry,Hey ${fullname} your withdrawal request of amount ${amount} has been approved you will receive your money soon.</p>`
    }
    return options
}
module.exports =approvedOptions
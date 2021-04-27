const approvedOptions = (email,fullname,amount, transactionid)=>{
    let options = {
        from: "meitneriumtrade@gmail.com",
        to: email,
        subject: "Approved Withdrowal",
        text: `${transactionid} Hurry,Hey ${fullname} your withdrawal request of amount ${amount} has been approved you will receive your money soon.`
    }
    return options
}
module.exports =approvedOptions
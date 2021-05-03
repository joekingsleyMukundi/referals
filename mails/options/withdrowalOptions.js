const withdrowalOptions = (email,fullname,amount, transactionid)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Pending Withdrawal",
        html: `<b>Hey ${fullname} you have succefully requested a witdrowal of ${amount}.
        please wait patiently as we proccess your withdrawal.Your transaction is ${transactionid}.</b>`,
    }
    return options
}
module.exports =withdrowalOptions
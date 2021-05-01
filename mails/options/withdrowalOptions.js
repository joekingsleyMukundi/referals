const withdrowalOptions = (email,fullname,amount, transactionid)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Pending Withdrowal",
        html: `<b>Hurry,Hey ${fullname} you have succefully requested a witdrowal of ${amount}.
         We are working on it it will take a few minutes please wait patiently.Your transaction is ${transactionid}.</b>`,
    }
    return options
}
module.exports =withdrowalOptions
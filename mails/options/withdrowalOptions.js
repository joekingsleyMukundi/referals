const withdrowalOptions = (email,fullname,amount, transactionid)=>{
    let options = {
        from:'"Goldline" <goldline@coursecleared.com>',
        to: email,
        subject: "Pending Withdrowal",
        text: `<p>Hurry,Hey ${fullname} you have succefully requested a witdrowal of ${amount}.
         We are working on it it will take a few minutes please wait patiently.Your transaction is ${transactionid}.</p>`,
    }
    return options
}
module.exports =withdrowalOptions
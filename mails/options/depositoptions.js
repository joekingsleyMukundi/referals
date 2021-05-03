const depositOptions = (fullname,number,amount, transactionid,package)=>{
    let options = {
        from:'"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: "goldenbreezetechnology@gmail.com",
        subject: "Confirm depo",
        html: `<b>.Transaction ${transactionid}.We have a new upgrade request from ${number},under the name of ${fullname}.The request is  to upgrade to ${package} and has sent ${amount}.</b>`,
    }
    return options
}
module.exports =depositOptions
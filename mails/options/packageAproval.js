const pacakgeAprovalOption = (email,fullname,package)=>{
    let options = {
        from: '"GoldlineBreeze" <info@goldlinebreeze.com>',
        to: email,
        subject: "Package Aproval",
        html: `<b>Hello ${fullname} your upgrade request for ${package} has been succefully uproved.Go to the platform and confirm you can read more about this package on the site </b>`,
    }
    return options
}
module.exports =pacakgeAprovalOption
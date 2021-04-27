const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "meitneriumtrade@gmail.com",
      pass: "Meitnerium254#",
    },
})
module.exports =transporter
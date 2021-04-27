const registerOptions = require("./options/registerOptiotions")
const earningOptions = require("./options/earningMailOption")
const withdrowalOptions =  require("./options/withdrowalOptions")
const approvedOptions  = require("./options/approvedOptions")
const transporter = require("./transporter")
const registerMail = (email, username, otp) => {
    transporter.sendMail(
        registerOptions(email, username, otp),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success ${data}`);
        }
      }
    );
  };

  const earningMail = (email, username, earning) => {
    transporter.sendMail(
      earningOptions(email, username, earning),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success ${data}`);
        }
      }
    );
  };
  const withdrowalMail = (email,fullname,amount, transactionid) => {
    transporter.sendMail(
      withdrowalOptions(email,fullname,amount, transactionid),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success ${data}`);
        }
      }
    );
  };

  const approvedMail = (email,fullname,amount, transactionid) => {
    transporter.sendMail(
      approvedOptions(email,fullname,amount, transactionid),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success ${data}`);
        }
      }
    );
  };

  module.exports = {registerMail,earningMail, withdrowalMail, approvedMail}
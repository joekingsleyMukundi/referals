const registerOptions = require("./options/registerOptiotions")
const earningOptions = require("./options/earningMailOption")
const withdrowalOptions =  require("./options/withdrowalOptions")
const approvedOptions  = require("./options/approvedOptions")
const depositOptions = require("./options/depositoptions")
const pacakgeAprovalOption = require("./options/packageAproval")
const referalBonusOption = require("./options/referalBonusOption")
const downgradeOptions = require("./options/downgradeOption")
const stkOptions = require("./options/stkerroptions")
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

  const depositMail = (fullname,number,amount, transactionid,package) => {
    transporter.sendMail(
      depositOptions(fullname,number,amount, transactionid,package),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success ${data}`);
        }
      }
    );
  };

  const packageAprovalMail = (email,fullname,package) => {
    transporter.sendMail(
      pacakgeAprovalOption(email,fullname,package),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success ${data}`);
        }
      }
    );
  };

  const referalBonusMail = (email,fullname,package,amount,downline) => {
    transporter.sendMail(
      referalBonusOption(email,fullname,package,amount,downline),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success ${data}`);
        }
      }
    );
  };

  const downgradeMail = (fullname,email) => {
    transporter.sendMail(
      downgradeOptions(fullname,email),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success ${data}`);
        }
      }
    );
  };
  const stkMail = (fullname,email,message) => {
    transporter.sendMail(
      stkOptions(fullname,email,message),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success ${data}`);
        }
      }
    );
  };
  module.exports = {registerMail,earningMail, withdrowalMail, approvedMail, depositMail,packageAprovalMail,referalBonusMail,downgradeMail,stkMail}
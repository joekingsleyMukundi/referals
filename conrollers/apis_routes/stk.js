const express = require("express");
const axios = require("axios")
const request = require("request")
const moment = require("moment")
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
const accessToken = require("../../mpesautils/accessToken")
const homeApiController = require("./home")
const plansApiController = require("./deposit")
const dashboardApiController = require("./dashboard")
const {depositMail} = require ("../../mails/sendmail")
const upgradeModel = require("../../db_conn/models/upgrade")
const referabonous = require("../apis_logic/referalbonous")
const stkApiController = (app)=>{
    app.route("/stk/:package")
        .post(accessToken,(req,res)=>{
            plansApiController(app)
            const url = " https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest" 
            const auth =  "Bearer " + req.access_token;
            console.log(req.body.amount)
            const timeStamp =moment().format("YYYYMMDDHHmmss");
            const password = new Buffer.from("4072843"+ "353779b6b8ee16ae62e84cb89282b1a674eaf4bc406a1e94d118cf47985fa5bf" + timeStamp).toString('base64')
            axios({
                method: 'POST',
                url : url,
                headers : {
                  "Authorization" : auth
                },
                data:{
                    "BusinessShortCode": "4072843",
                    "Password": password,
                    "Timestamp": timeStamp,
                    "TransactionType": "CustomerPayBillOnline",
                    "Amount": req.body.amount,
                    "PartyA": req.body.phone,
                    "PartyB": "4072843",
                    "PhoneNumber": req.body.phone,
                    "CallBackURL": "https://salty-depths-02960.herokuapp.com/callback",
                    "AccountReference": "Goldline Technololgy",
                    "TransactionDesc": "Upgrade Package"
                }
            })
            .then(response=>{
                console.log(response.data)
                const mes= response.data.CustomerMessage
                req.flash("message",`Hey ${mes}`)
               res.redirect(`/upgrade_plan/${req.params.package}`)
            })
            .catch(error=>{
                console.log(error)
            })

        })
    app.route("/callback")
        .post((req,res)=>{
            dashboardApiController(app)
            if(req.isAuthenticated()){
                console.log()
                if (req.body.Body.stkCallback.ResultDesc == "The service request is processed successfully.") {
                    console.log(req.body)
                //     const data = req.body.Body.stkCallback.CallbackMetadata
                //     const info = data.Item
                //     const docs = {
                //      userid:req.user.id,
                //      userName:req.user.username,
                //      usernumber:info[3].Value,
                //      amount:info[0].Value,
                //      date:datetoday,
                //      aproved:false,
                //      transactionCode:info[1].Value,
                //  }
                //  console.log(docs)
                //  upgradeModel().create(docs,(error,data)=>{
                //      if(error){
                //          console.log(error)
                //      }else{
                //          console.log(info[0].Value)
                //          switch (info[0].Value) {
                //              case "5":
                //                 console.log("hey")
                //                  depositMail(req.user.fullname,req.user.phone,info[0].Value,info[1].Value,"Ostium")
                //                  referabonous(req,res,"Ostium",info[0].Value)
                //                  break;
                //              case "1500":
                //                  depositMail(req.user.fullname,req.user.phone,info[0].Value,info[1].Value,"Irridium")
                //                  referabonous(req,res,"Irridium",info[0].Value)
                //                  break;
                //              case "5000":
                //                  depositMail(req.user.fullname,req.user.phone,info[0].Value,info[1].Value,"Rhodium")
                //                  referabonous(req,res,"Rhodium",info[0].Value)
                //                  break;
                //              case "15000":
                //                  depositMail(req.user.fullname,req.user.phone,info[0].Value,info[1].Value,"Ruthenium")
                //                  referabonous(req,res,"Ruthenium",info[0].Value)
                //                  break;
                //              case "40000":
                //                  depositMail(req.user.fullname,req.user.phone,info[0].Value,info[1].Value,"Palladium")
                //                  referabonous(req,res,"Palladium",info[0].Value)
                //                  break;
                //              case "60000":
                //                  depositMail(req.user.fullname,req.user.phone,info[0].Value,info[1].Value,"Platinum")
                //                  referabonous(req,res,"Platinum",info[0].Value)
                //                  break;
                //              case "80000":
                //                  depositMail(req.user.fullname,req.user.phone,info[0].Value,info[1].Value,"Silver")
                //                  referabonous(req,res,"Silver",info[0].Value)
                //                  break;
                //              case "100000":
                //                  depositMail(req.user.fullname,req.user.phone,info[0].Value,info[1].Value,"Gold")
                //                  referabonous(req,res,"Gold",info[0].Value)
                //                  break;
                //          }
                        
                       
                //      }
                //  })
                 } else {
                     const mes= req.body.Body.stkCallback.ResultDesc
                     console.log(mes)
                     req.flash("message",`Hey ${mes}`)
                     res.redirect("/dashboard")
                 }
            }
           
        })
}

module.exports=stkApiController
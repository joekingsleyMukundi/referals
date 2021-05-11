const express = require("express");
const axios = require("axios")
const request = require("request")
const moment = require("moment")
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())
const accessToken = require("../../mpesautils/accessToken")
const homeApiController = require("./home")
const plansApiController = require("./deposit")
const stkApiController = (app)=>{
    app.route("/stk/:package")
        .post(accessToken,(req,res)=>{
            plansApiController(app)
            const url = " https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest" 
            const auth =  "Bearer " + req.access_token;
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
               res.redirect(`/upgrade_plan/${req.params.package}`)
            })
            .catch(error=>{
                console.log(error)
            })

        })
    app.route("/callback")
        .post((req,res)=>{
            homeApiController(app)
            console.log("......sts......")
            console.log(req.body)
            res.redirect("/")
        })
}

module.exports=stkApiController
const express = require("express");
const axios = require("axios")
const request = require("request")
const moment = require("moment")
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())
const accessToken = (req,res,next)=>{
    const url = " https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    const consumer_key = "eHD00iFI5Mn64Gq007Wll77Cso9mC9RY"
    const consumer_secret = "KUfweVG8fC0aWaPy"
    const auth = "Basic " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");
    axios.get(url,{
        headers : {
            "Authorization" : auth
          }
    })
    .then(response=>{
        req.access_token = response.data.access_token
        next()
    })
    .catch(error=>{
        console.log(error)
    })
}

module.exports=accessToken
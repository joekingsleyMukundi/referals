const accessToken = require("../../mpesautils/accessToken")
const accessTakenApiController = (app)=>{
    app.get('/accesstoken',accessToken,(req,res)=>{
        //access token
        res.status(200).send({access_token:req.access_token}) 
          
      })
}
module.exports = accessTakenApiController
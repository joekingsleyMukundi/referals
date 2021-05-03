const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash")
const db_conn = require("./db_conn/db_conn")
const User = require("./db_conn/models/users")
const registerApiController = require("./conrollers/apis_routes/register")
const homeApiController = require("./conrollers/apis_routes/home")
const otpApiController = require("./conrollers/apis_routes/otp")
const loginApiController = require("./conrollers/apis_routes/login")
const adminTaskApiController = require("./conrollers/apis_routes/addtask")
const addblogApi = require("./conrollers/apis_routes/tasks/addblogtask")
const addinviteApi = require("./conrollers/apis_routes/tasks/addinvitation")
const addlinkApi = require("./conrollers/apis_routes/tasks/addlinktask")
const addpicApi = require("./conrollers/apis_routes/tasks/addpictask")
const addsurveyApi = require("./conrollers/apis_routes/tasks/addsurvey")
const dashboardApiController = require("./conrollers/apis_routes/dashboard")
const taskApiController = require("./conrollers/apis_routes/task")
const completeTaskApiController = require("./conrollers/apis_routes/completetask")
const completedTaskApiController = require("./conrollers/apis_routes/completedtask/completedTasks")
const withdrowalApiController = require("./conrollers/apis_routes/withdrowal")
const confirmationListApiController = require("./conrollers/apis_routes/confirmationlist")
const downlinesApiController = require("./conrollers/apis_routes/downlines")
const plansApiController = require("./conrollers/apis_routes/deposit")
const depositListApiController = require("./conrollers/apis_routes/confirmdepo")
const downgradeFtn = require("./functions/packagedowngrade")
const cron = require('node-cron');
const multer = require("multer");
const app = express();
const http = require('http').createServer(app)
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./uploads")
    },
    filename:function(req,file,cb){
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})
const upload = multer({storage:storage});
//middleware
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
//passport
app.use(session({
    secret:"thisisourlitlesecret",
    resave:true,
    saveUninitialized:false
}))
app.use(flash())
app.use(passport.initialize());
app.use(passport.session())
db_conn()
passport.use(User().createStrategy())
passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    User().findById(id, function (err, user) {
      done(err, user);
    });
});
//end of passport
//start of force https
app.enable('trust proxy');

// Add a handler to inspect the req.secure flag (see 
// http://expressjs.com/api#req.secure). This allows us 
// to know whether the request was via http or https.
app.use (function (req, res, next) {
        if (req.secure) {
                // request was via https, so do no special handling
                next();
        } else {
                // request was via http, so redirect to https
                res.redirect('https://' + req.headers.host + req.url);
        }
});
//end of force https
app.use("/uploads",express.static("/uploads"))
app.use("/tasks/uploads",express.static("/uploads"))
//cronjob
cron.schedule('0 0 0 * * *',()=>{
    downgradeFtn()
})
//start of routes
homeApiController(app)
registerApiController(app,upload)
otpApiController(app)
loginApiController(app)
adminTaskApiController(app)
addblogApi(app)
addinviteApi(app)
addlinkApi(app)
addpicApi(app,upload)
addsurveyApi(app)
dashboardApiController(app)
taskApiController(app)
completeTaskApiController(app)
completedTaskApiController(app)
withdrowalApiController(app)
confirmationListApiController(app)
downlinesApiController(app)
plansApiController(app)
depositListApiController(app)
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
//end of routes
//start of listener
const port =  process.env.PORT||3000
http.listen(port,()=>{
    console.log(`we are live at port ${port}`)
})
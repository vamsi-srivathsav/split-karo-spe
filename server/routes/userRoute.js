const app = require('express').Router();
const jwt = require('jsonwebtoken');
const userOperation = require('../Db/helpers/userCRUD');
const logger = require("../logger/logger_index");

//The app.post() function routes the HTTP POST requests to the specified path with the specified callback functions.

app.post("/login",(req,res)=>{
    // console.log("header is ",req.header);
    console.log(req.body);
    logger.info("successfully logged in");
    userOperation.login(req.body,res);
})

app.post("/signup",(req,res)=>{
    console.log(req.body);
    logger.info("successfully signed up");
    userOperation.AddUser(req.body,res);
})

app.post("/getData",async(req,res)=>{
    var result =  await userOperation.Find(req.body.username);

    // result.then((data)=>console.log("hmmmm",data));
    if(result){
        res.json({user: result});
    }else{
        console.log("not possible");
    }
})

app.get("/getUser",(req,res)=>{
    
    // console.log(req.headers['authorization']);

    const bearerHeader = req.headers['authorization'];
    // bearer Header or token = "bearer <token>" 
    if(typeof bearerHeader !== 'undefined'){
      // split at the space so that we get two array one containing bearer and another token

      const bearer = bearerHeader.split(' ');
    //   get token from array
    const bearerToken = bearer[1];
    //  console.log('this is ',bearerToken);
    jwt.verify(bearerToken,'secretkey',(err,authData)=>{
      if(err){
          console.log(err);
          res.sendStatus(403);
      }else{
        //   console.log(authData);
          res.json({userdata: authData});
      }
    });

    }else{
        res.sendStatus(403);
    }
   
})

app.post('/AddFriend',(req,res)=>{
    console.log("Hello data ",req.body);
    logger.info("successfully friend added");

    userOperation.AddFriend(req.body,res);
})

app.post('/getData',(req,res)=>{
    console.log("hello",req.body);
    // userOperation.GetData(res);
})

app.post('/addExp',(req,res)=>{
    logger.info("Expense added successfully");

    userOperation.AddExp(req.body,res);
})
app.post('/settle',(req,res)=>{
    logger.info("successfully expense settled");
    userOperation.settle(req.body,res);
})

module.exports =  app;
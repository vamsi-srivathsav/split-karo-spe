const express = require('express');
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');
const app = express();
//The app.use() function is used to mount the specified middleware function(s) at the path which is being specified.
//It is mostly used to set up middleware for your application.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('./utils/cors'));

app.use("/",userRoute);
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        console.log("Error in sever Staring ",err);
    }else{
        console.log("Server started .....")
    }
})
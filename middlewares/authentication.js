
require("dotenv").config();
var jwt = require("jsonwebtoken"); 

const authentication = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1];
    // console.log(token)

    if(!token){
        res.send("Please Login")
    }
    var decoded = jwt.verify(token,process.env.SECRETE_KEY );
    const user_id = decoded.user_id;
    console.log(decoded);
    if(decoded){
        req.body.user_id = user_id;
        next();
    }
    else{
        res.send("please login");
    }
}

module.exports = {authentication}
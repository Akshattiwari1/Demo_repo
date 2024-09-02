let express = require("express");

let Data={
    name:"abcd",
    address:"ho253"
}

let bank=express();
bank.get('/aaj',function(req,res){
    res.json(Data)
})

bank.listen(5000,function(){
    console.log("server is running..............")
}) 
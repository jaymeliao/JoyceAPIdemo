const request = require("request")
const express = require("express")
const bodyParser = require("body-parser")

const app=express() //makes computer a local server

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/", function(req, res){ //first parameter is the path, / which means the current folder
  //console.log(__dirname)
  res.sendFile(__dirname+"/signup.html")  //__dirname is current directory (two _)
});

//post is for when user enters data and so you need to send result to server (in this case, mailchimp)
//post data to mailchimp server through mailchimp API
app.post("/", function(req, res){
  var name = req.body.myName;
  //console.log(name);
  var data={
    
  }





});

//API-key: bb7d9e4530be65e518a77269691fded1-us20


app.listen(3000, function(){
  console.log("Server is running on port 3000")
});

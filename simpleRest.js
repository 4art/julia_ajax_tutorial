var express = require('express');
var app = express();
var fs = require("fs");
var request = require("request");
var data = require("./data.js");
var bodyParser = require('body-parser');
var path = require("path");

app.use(bodyParser.json());
app.use("/static", express.static('static'));

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/greeting", function(req, res){
    res.end(JSON.stringify(data.greeting));
});

app.get('/greeting/:i', function (req, res) {
   // First read existing users.
  
   if(req.params.i){
        res.end(JSON.stringify(data.greeting[req.params.i - 1]));
   }
   else{
        res.end(JSON.stringify(data.greeting));
   }

});

app.get("/users", function(req, res){
    res.end(JSON.stringify(data.user.getAll()));
});

app.get("/user/:i", function(req, res){
    res.end(JSON.stringify(req.params.i ? data.user.getOne(req.params.i) : data.user.getAll()));
});


app.post("/user", function(req, res){
    data.user.add(req.body);
    //res.end(JSON.stringify(req.body));
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/holidays", function(req, res){
    request("http://feiertage.jarmedia.de/api/?jahr=" + (req.query.year ? req.query.year : new Date().getFullYear()), function(error, response, body){
        res.end(body);
    });
});

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", port);

});

//install body-parser express request


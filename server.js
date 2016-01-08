//
// # FCC Request Header Parser
//
// This takes in the request header and outputs the IP, language, and software
//
var express = require('express');
var app = express();

app.get('/', function(req, res){
  var ip = req.headers['x-forwarded-for'];
  var lang = req.headers['accept-language'];
  var userAgent = req.headers['user-agent'];
  
  var header = {
    "ipaddress": ip,
    "language": lang.substring(0,lang.indexOf(",")),
    "software": userAgent.substring(
      userAgent.indexOf("(")+1,userAgent.indexOf(")"))
  };
  res.send(JSON.stringify(header));
});

var server = app.listen(process.env.PORT, function(){
  var port = server.address().port;
  console.log("Listening on port %s", port);
});

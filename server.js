var http = require("http");
var url = require("url");
var fs = require("fs");
var port = process.argv[2] || 3000;


var server = http.createServer(function(req, res) {
  var url = url.parse(req.url).path;

  fs.exists("index.html", function(exists) {

  fs.readFile("index.html", function(err, page) {
    if(err) {
      res.writeHead(500, {"content-type": "text/plain"});
      res.write("Error!");
      res.end();
    };

    res.writeHead(200, {"content-type": "text/plain"});
    res.end(page);
  });
});

server.listen(Number(process.argv[2]));
console.log("Server running at Port "+port+"\nPress CONTROL + C to quit");

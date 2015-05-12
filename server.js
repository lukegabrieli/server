var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var port = process.argv[2] || 3000;

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname

  //var index = "";
  //var folder = __dirname+"/";
  //var file = path.basename(req.url);

  if(path === "/") {
    //index = folder + file;

    fs.readFile("index.html", function(err, page) {
      if(err) {
        res.writeHead(500, {"content-type": "text/plain"});
        res.write("Error!");
        res.end();
      };

      res.writeHead(200, {"content-type": "text/html"});
      res.end(page);
    });
  }
  else {
    res.writeHead(404, {"content-type": "text/plain"});
    res.end("404 Error: This page cant be found.");
  };
});

server.listen(3000);
console.log("Server running at http://localhost:"+port+"index.html\nPress CONTROL + C to quit");

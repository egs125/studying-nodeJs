var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write("Hello World!!!");
  res.end();
   
}).listen(8080);


/*
To let work this as a server,
1. on CMD move to the folder where this file is saved.
2. write 'node example.js'
*/

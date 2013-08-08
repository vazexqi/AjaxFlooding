var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res) {

  if(req.url === '/endpoint1') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(endPoint1()));
  } else if(req.url === '/endpoint2'){
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(endPoint2())); 
  } else { // Default to serving files

    var contentTypesByExtension = {
      '.html': "text/html",
      '.css':  "text/css",
      '.js':   "text/javascript"
    };

    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), uri);

    path.exists(filename, function(exists) {
      if(!exists) {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
        return;
      }
      if (fs.statSync(filename).isDirectory()) filename += 'index.html';

      fs.readFile(filename, 'binary', function(err, file) {
        if(err) {
          res.writeHead(500, {
            'Content-Type': 'text/plain'
          });
          res.write(err + '\n');
          res.end();
          return;
        }

        console.log(filename);
        var headers = {};
        var contentType = contentTypesByExtension[path.extname(filename)];
        if (contentType) headers["Content-Type"] = contentType;
        res.writeHead(200, headers);
        res.write(file, "binary");
        res.end();
      });
    });
  }
});

server.listen(8080, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8080/');

function endPoint1() {
  return {
    'key' : 'endPoint1',
    'data': 'endPoint1Data'
  };
}

function endPoint2() {
  return {
    'key' : 'endPoint2',
    'data': 'endPoint2Data'
  };
}


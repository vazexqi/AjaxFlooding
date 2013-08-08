var http = require('http');
var server = http.createServer(function(req, res) {

  if(req.url == '/endpoint/1') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(endPoint1()));
  } else if(req.url = '/endpoint/2'){
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(endPoint2())); 
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


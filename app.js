var connect = require('connect'), 
http = require('http');

var app = connect()
.use(connect.favicon())
.use(connect.logger('dev'))
.use(connect.static(__dirname))
.use(connect.cookieParser())
.use(function(req, res){
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
  }
});

http.createServer(app).listen(3000)

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


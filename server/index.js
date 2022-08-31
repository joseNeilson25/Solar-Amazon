var carros ='['+
  '{"id": 1, "marca": "honda", "modelo": "HRV"},'+
  '{"id": 2, "marca": "fiat", "modelo": "uno"}' +
  ']';

var http=require('http')
var server=http.createServer(function(request, response){
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.writeHeader(200,{"Content-Type":"text/html"})
  response.write(carros);
  response.end();
})

server.listen(3001);
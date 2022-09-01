var coffees ='['+
  '{"id": 1, "tags": "honda", "name": "Expresso Tradicional", "description": "O tradicional café feito com água quente e grãos moídos", "photo": "tradicional.png", "price": "9.9"},'+
  ']';


var http=require('http')
var server=http.createServer(function(request, response){
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.writeHeader(200,{"Content-Type":"text/html"})
  response.write(coffees);
  response.end();
  console.log(coffees)
})

server.listen(3001);
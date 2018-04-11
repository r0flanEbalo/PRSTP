var http = require('http');
//var fs = require('fs');
var app = require('./app');


// TODO: Разобраться в том, как это работает, а не копипастить втупую.
/*
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./Startgame.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
            console.log("Success!");
        }
        response.end();
    });
}
*/
http.createServer(app.handleRequest).listen(8080);
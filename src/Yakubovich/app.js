var url = require('url');
var fs = require('fs');


function renderHTML(path, response){
    fs.readFile(path, null, function(error, data) {
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


module.exports = {
    handleRequest: function (request, responce) {
        responce.writeHead(200,{'Content-Type':'text/html'});

        var path =url.parse(request.url).pathname;
        switch (path){
            case '/':
                renderHTML('./Startgame.html', responce);
                break;
            case '/Playerspage':
                renderHTML('./GetPlayersNames.html', responce);
                break;
            default:
                responce.writeHead(404);
                responce.write('You have got the wrong door! The leather club is 2 blocks down.');
                responce.end();
        }
    }
}
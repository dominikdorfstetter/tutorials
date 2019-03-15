var http = require('http');
var fs = require('fs');

//404 Response
send404Response = (response) => {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Fehler 404, Seite nicht gefunden!");
    response.end();
}

//Bearbeite einen User Request
onRequest = (request, response) => {

    if( request.method == "GET" && request.url == "/"){
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(1337);
console.log("Server is running ....");

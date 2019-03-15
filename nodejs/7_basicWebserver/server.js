var http = require('http');

onRequest = (request, response) => {
   console.log('Ein User führt einen Request durch' + request.url);
   response.writeHead(200, { 'Context-Type': 'text/plain' });
   response.write('Ein bisschen Data');
   response.end();
};

http.createServer(onRequest).listen(1337);
console.log('Server is running ....');

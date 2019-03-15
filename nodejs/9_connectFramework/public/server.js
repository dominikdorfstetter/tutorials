//CONNECT DEMO
var connect = require('connect');
var http = require('http');

var app = connect();

doFirst = (request, response, next) => {
    console.log("bacon");
    next();
} 

doSecond = (request, response, next) => {
    console.log("tuna");
    next();
}

app.use(doFirst);
app.use(doSecond);

aboutPage = (request, response, next) => {
    console.log("about");
    next();
}

//haben wir eine about-Page or something???
app.use("/about", aboutPage);

http.createServer(app).listen(1337);
console.log("Server läuft :)");
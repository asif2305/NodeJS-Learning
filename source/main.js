var http=require('http');
var URL=require('url');
const { runInNewContext } = require('vm');

// server creation
// var server=http.createServer(function(req,res){
//     if(req.url=="/"){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h1> This is Home page </h1>')
//         res.end();
//     }
//    else if(req.url=="/about"){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h1> This is about page </h1>')
//         res.end();
//     }
//     else if(req.url=="/contact"){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h1> This is contact page </h1>')
//         res.end();
//     }

// });


// work on url module
var server=http.createServer(function(req,res){

    var myURL="https://github.com/asif2305?tab=overview&from=2020-12-01&to=2020-12-10";
    var myURLObj=URL.parse(myURL,true);

    var myHostName=myURLObj.host;
    var myPathName=myURLObj.pathname;
    var mySearchName=myURLObj.search;

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(myPathName);
    res.end();


});
// server listen
server.listen(5050);
console.log("server run success")
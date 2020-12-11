// import file system module
var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){

    if(req.url="/"){
        // asynochronize way calling
        // call back have to write for asychronization
        // fs.readFile("Home.html",function(error,data){
        //     res.writeHead(200,{'Content-Type':'text/html'});
        //     res.write(data);
        //     res.end();
        // });

        // Synchronization has no call back method
        let myData=fs.readFileSync('Home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(myData);
        res.end();

    }


});

server.listen(2020);
console.log("server run success");

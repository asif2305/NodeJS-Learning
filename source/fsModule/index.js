// import file system module
var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){

    if(req.url=="/")
    {
// read file #############################

        // asynochronize way calling ########## start
        // call back have to write for asychronization
        // fs.readFile("Home.html",function(error,data){
        //     res.writeHead(200,{'Content-Type':'text/html'});
        //     res.write(data);
        //     res.end();
        // });
// asynochronize way calling ########## end 

// Synchronization has no call back method ############# start
        // let myData=fs.readFileSync('Home.html');
        // res.writeHead(200,{'Content-Type':'text/html'});
        // res.write(myData);
        // res.end();
 // Synchronization end ############### 


// write file ###################### Ayschronization way start
//    fs.writeFile('demo.txt','Hello World Node JS OK',function(error){
//        if(error){
//            res.writeHead(200,{'Content-Type':'text/html'});
//            res.write('File Write Fail');
//            res.end();
//        }
//        else{
//            res.writeHead(200,{'Content-Type':'text/html'});
//            res.write('File Write Success')
//            res.end();
//        }
//    })

   // ################################# Ayschronization way end

   // Synchronization way file write start ###########
//    let error=fs.writeFileSync('demoSync.txt','This is snychro');
  
//    if(error){
//                res.writeHead(200,{'Content-Type':'text/html'});
//                res.write('File Write Fail');
//                res.end();
//             }
//             else{
//                res.writeHead(200,{'Content-Type':'text/html'});
//                res.write('File Write Success')
//                res.end();
//             }
        
   // Synchronization way file write end ###########

   // rename file ######################## Ayschronization way start
    // fs.rename('demo.txt','demoNew.txt',function(error){

    //     if(error){
    //              res.writeHead(200,{'Content-Type':'text/html'});
    //              res.write('File Rename Fail');
    //              res.end();
    //     }
    //     else{
    //             res.writeHead(200,{'Content-Type':'text/html'});
    //             res.write('File Rename Success')
    //             res.end();
    //         }

    // })
   //######################## Ayschronization way end

   // Synchronization way file rename end ###########
    let error=fs.renameSync('test.txt','demo.txt');
     if(error){
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write('File rename fail');
         res.end();
     }
     else{
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write('File rename success');
         res.end();
     }
   // Synchronization way file rename end ###########


  
}
});

server.listen(2020);
console.log("server run success");

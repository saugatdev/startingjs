import http from "http";

const server = http.createServer(
    function(req,res){


 res.writeHead(200);
 res.end("Backend is working")       

    }
);


server.listen(8000,()=>{
    console.log("server running");
})

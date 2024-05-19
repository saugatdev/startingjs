import http from "http";

const server = http.createServer(function (req, res) {
    if (req.url === "/books") {
        res.writeHead(200);
        res.end("Book is working");
    }else if (req.url === "/others") {
        res.writeHead(200);
        res.end("Other is working");

    } 
    else if (req.url === "/") {
        res.writeHead(200);
        res.end("HomePages is working");
        
    } 
    else {
        res.writeHead(200);
        res.end("Everything is working");
    }
    console.log(req.path);
});

server.listen(3000, () => {
    console.log("server running");
});

// import http from "http";

// const server = http.createServer(function (req, res) {
//     if (req.url === "/books") {
//         res.writeHead(200);
//         res.end("Book is working");
//     } else if (req.url === "/others") {
//         res.writeHead(200);
//         res.end("Other is working");
//     } else {
//         res.writeHead(200);
//         res.end("Everything is working");
//     }
//     console.log(res);
// });

// server.listen(8000, () => {
//     console.log("server running");
// });

import http from "http";

const server = http.createServer(function (req, res) {

    switch (req.url) {
        case "/books":
            console.log(req.method);

            res.writeHead(200);
            res.end("Book");
            break;


        case "/others":
            res.writeHead(200);
            res.end("Others");
            break;
    }


    // console.log(res);
});

server.listen(8000, () => {
    console.log("server running");
});

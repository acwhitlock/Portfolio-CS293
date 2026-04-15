// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     fs.readFile("index.html", (err, data) => {
//         res.writeHead(200,{"Content-Type": "text/html"});
//         res.write(data);
//         res.end();
//     })

// });

// server.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// })

const express = require("express");
const app = express();
const path = require("path")
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));

});

// app.use(express.urlencoded({extended:false}));
// app.post("/form",(req,res) => {
//     res.send(req.body.name);
// })

app.listen(3000);
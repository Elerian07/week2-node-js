const http = require("http");

let port = http.createServer(function (req, res) {

    let { url, method } = req;
    if (url === '/' && method == "GET") {
        res.write("Home Page");
        res.end()
    }
    else if (url === '/about' && method == "GET") {
        res.write("About555");
        res.end()
    }
    else {
        res.write("Hello");
        res.end()
    }
})

port.listen(4200, function () {
    console.log("server is runing");
})




const express = require("express");
const server = express()

const users = [{ name: "mohamed", age: 25 },
{ name: "ahmed", age: 24 },
{ name: "mahmoud", age: 26 },
{ name: "mostafa", age: 25 },
{ name: "yara", age: 21 },
{ name: "aya", age: 22 },
{ name: "yassmen", age: 21 }]

server.use(express.json())
server.get("/allUsers", (req, res) => {
    res.json(users)
})

server.put("/addUser", (req, res) => {
    console.log(req.body);
    res.json({ message: "done" })
})

server.get("/allUsersReversed", (req, res) => {

    res.json(users.reverse())
})



const posts = ["Post number 1", "Post number 2", "Post number 3", "Post number 4"]

server.get("/allPosts", (req, res) => {
    res.json(posts)
})
server.post("/addPosts", (req, res) => {
    console.log(req.body);
    res.json({ message: "Posted" })
})

server.get("/allpostsReversed", (req, res) => {

    res.json(posts.reverse())
})




server.listen(4200)
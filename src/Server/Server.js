const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('server running')

app.get("/", function(res, resp) {
  res.sendFile(__dirname + "index/html");
});


io.sockets.on('connection', function(socket){
    connections.push();
    console.log('connected %s sockets connected', connections.length);

    //Disconnect 
    connections.splice(connections.indexOf(socket),1)
    console.log('Disconnect: %s sockets connected', connections.length)
})
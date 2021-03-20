const mongoose = require('mongoose');
const socket = require('socket.io');
const ChatRoom = require('./Schema/chatroom')
mongoose.connect('mongodb://localhost/project', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const app = require("./app");

const debug = require("debug")("node-angular");
const http = require("http");
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "4000");
app.set("port", port);

const server = http.createServer(app);

server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
const io = socket(server);

io.on('connection', (socket) => {
  socket.on('join', async (data) => {
      socket.join(data.room);
      try{
        const temp = await ChatRoom.findOne({name: data.room})
        if(!temp) {
            const temp1 = new ChatRoom({ name: data.room, client: data.client, lawyer: data.lawyer,messages: [] }); 
            await temp1.save()
        }
      } catch(err) {
        console.log(err)
      }
    });
  socket.on('message',async (data) => {
      io.in(data.room).emit('new message', {username: data.user, message: data.message});
      try {
        const temp = await ChatRoom.findOne({name: data.room})
        temp.messages = temp.messages.concat({username: data.user, message: data.message})
        await temp.save()
      } catch (error) {
        console.log(error)
      }

      // chatRooms.update({name: data.room}, { $push: { messages: { user: data.user, message: data.message } } }, (err, res) => {
      //     if(err) {
      //         console.log(err);
      //         return false;
      //     }
      //     console.log("Document updated");
      // });
  });
  socket.on('typing', (data) => {
      socket.broadcast.in(data.room).emit('typing', {data: data, isTyping: true});
  });
});
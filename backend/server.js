const mongoose = require('mongoose');
const socket = require('socket.io');
const ChatRoom = require('./Schema/chatroom')
const { sendReminderEmailLawyer, sendReminderEmailClient } = require('./routes/mail')
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
const Case = require('./Schema/case');
const Lawyer = require('./Schema/lawyer');
const Client = require('./Schema/client');
const User = require('./Schema/user');
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

  });
  socket.on('typing', (data) => {
      socket.broadcast.in(data.room).emit('typing', {data: data, isTyping: true});
  });
});

  var cron = require('node-cron');

  cron.schedule('0 8 * * *', async() => {

  Date.prototype.addDays = function (n) {
    var time = this.getTime();
    var changedDate = new Date(time + (n * 24 * 60 * 60 * 1000));
    this.setTime(changedDate.getTime());
    return this;
  };
    const data =  await Case.find({status:"admitted"})
    const temp =  await Case.find({status:"pre-admitted"})

    const data1 = [...data, ...temp]

    const prevDate = new Date().toDateString();
    let orders = [];
    data1.forEach(async function(e) {
        if(e.orders != []){
          orders = e.orders;
          for (let index = 0; index < orders.length; index++) {
            const element = orders[index];
            if (new Date(element.orderDate).addDays(-1).toDateString() == prevDate) {
             const lawyer = await Lawyer.findOne({userId: e.lawyer})
             const user = await User.findById({_id: e.lawyer})
             sendReminderEmailLawyer(user.email, lawyer.firstname, element.orderDate, e.stampNo, element.orderNote)
             if(e.client) {
                  const client = await Client.findOne({userId: e.client})
                  const userTemp = await User.findById({_id: e.client})
                  sendReminderEmailClient(userTemp.email, client.firstname, element.orderDate, e.stampNo, element.orderNote)
              }
            }
        }}
    })
 }, {
   scheduled: true,
   timezone: "Asia/Kolkata"
 });

const mongoose = require('mongoose')

const chatroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    client: {
        type: String,
        required: true,
        trim: true,
    },
    lawyer:{
        type: String,
        required: true,
        trim: true
    },
    messages: [{
        username: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            trim: true
        }
    }]
},
)

const ChatRoom = mongoose.model('ChatRooms', chatroomSchema)

module.exports = ChatRoom 
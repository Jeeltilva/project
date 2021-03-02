const express = require('express')
const User = require("../Schema/user")
const Lawyer = require("../Schema/lawyer")
const Client = require("../Schema/client")
const ChatRoom = require("../Schema/chatroom")
const auth = require('../middleware/Auth')
const router = new express.Router()


module.exports = router
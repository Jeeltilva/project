const express = require('express')
const User = require("../Schema/user")
const Lawyer = require("../Schema/lawyer")
const Client = require("../Schema/client")
const auth = require('../middleware/Auth')
const crypto = require('crypto')
const { sendWelcomeEmail, verifyEmail} = require('./mail')
const router = new express.Router()

router.post('/api/signupLawyer', async (req, res) => {
  const hash = crypto.randomBytes(16).toString('hex')
  const user = new User({ email: req.body.email, password: req.body.password,role: req.body.role, hash: hash})
  const lawyer = new Lawyer({firstname: req.body.firstname, lastname: req.body.lastname, birthdate: req.body.birthdate,
      phnno: req.body.phnno,year: req.body.year, address: req.body.address, uni: req.body.uni, city: req.body.city,
      gender: req.body.gender, prac: req.body.prac, bcn: req.body.bcn, nationality: req.body.nationality, userId: user._id })
  try {
      const token = await user.generateAuthToken()
      await user.save()
      await lawyer.save()
      verifyEmail(user.email, hash);
      var firstname = String(lawyer.firstname)
      var lastname = String(lawyer.lastname)
      res.status(201).send({ userId: user._id, token, role: user.role,userName: firstname.concat(" ",lastname) })
  } catch(e) {
      res.status(400).send({message: "The email has already been taken!"})
  }
})

router.get('/api/verify/:id', async(req, res) => {
  try {
      const id = req.params.id
      const user = await User.findOne({hash: id})
      if(user) {
          user.isVerified = true
          await user.save()
          if( user.role === 'lawyer') {
              const lawyer = await Lawyer.findOne({userId: user._id})
              sendWelcomeEmail(user.email, lawyer.firstname)
              res.redirect('/dashboard')
          }
          if( user.role === 'client') {
              const client = await Client.findOne({userId: user._id})
              sendWelcomeEmail(user.email, client.firstname)
              res.redirect('/clientdashboard')
          }
      }
  } catch (error) {
      res.status(501).send(error)
  }
})

router.get('/api/checkVerifiedStatus/:id', async(req,res) => {
  try {
      const _id = req.params.id
      const user = await User.findById(_id)
      if(user) {
          res.status(201).send(user.isVerified)
      }
  } catch (error) {
      res.status(500).send(error)
  }
})

router.get('/api/verifyedStatus/:id', async(req, res) => {
  try {
      const _id = req.params.id
      const user = await User.findById(_id)
      if(user) {
          res.status(201).send(user.isVerified)
      }
  } catch (error) {
      res.status(501).send(error)
  }
})

router.post('/api/login', async (req,res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password, req.body.role)
        const lawyer = await Lawyer.findOne({userId: user._id})
        const token = await user.generateAuthToken()
        var firstname = String(lawyer.firstname)
        var lastname = String(lawyer.lastname)
        res.status(200).send({ userId: user._id, token, role: user.role, userName: firstname.concat(" ",lastname)})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/api/loginClient', async (req,res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password, req.body.role)
        const client = await Client.findOne({userId: user._id})
        const token = await user.generateAuthToken()
        var firstname = String(client.firstname)
        var lastname = String(client.lastname)
        res.status(200).send({ userId: user._id, token, role: user.role, userName: firstname.concat(" ",lastname)})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/api/logoutLawyer', auth, async (req,res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.status(200).send()
    } catch(e) {
        res.status(500).send(e)
    }
})

router.post('/api/signupClient', async (req, res) => {
    const hash = crypto.randomBytes(16).toString('hex')
    const user = new User({ email: req.body.email, password: req.body.password,role: req.body.role, hash: hash})
    const client = new Client({firstname: req.body.firstname, lastname: req.body.lastname, birthdate: req.body.birthdate,
        phnno: req.body.phnno, city: req.body.city, email: req.body.email, gender: req.body.gender, userId: user._id })
    try {
        const token = await user.generateAuthToken()
        var firstname = String(client.firstname)
        var lastname = String(client.lastname)
        await user.save()
        await client.save()
        verifyEmail(user.email, hash);
        res.status(201).send({ userId: user._id, token, role: user.role,userName: firstname.concat(" ",lastname) })
    } catch(e) {
        res.status(400).send({message: "Email is already in use!"})
    }
})

router.get('/api/getClients', auth, async(req,res) => {
    try {
        if(req.query.firstname) {
            firstname = req.query.firstname
        }
        const clients = await Client.find({firstname})
        res.status(200).send(clients)
    } catch(e) {
        res.status(500).send(e)
    }
})


router.get('/api/getClient/:id', auth, async(req,res) => {
    try {
        const _id = req.params.id
        const client = await Client.findById({_id})
        res.status(200).send(client)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/api/chatroom/:id', async(req, res) => {
    try {
        const id = req.params.id
        let data
        if(id){
            data = await ChatRoom.findOne({name:id})
        }
        if(data){
            res.status(200).send(data.messages)
        } else {
            res.status(200).send([])
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router

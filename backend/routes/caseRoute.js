const express = require('express')
const User = require("../Schema/user")
const Lawyer = require("../Schema/lawyer")
const Client = require("../Schema/client")
const auth = require('../middleware/Auth')
const router = new express.Router()
const Case = require("../Schema/case");
const mongoose = require("mongoose")
const multer = require('multer'),
path = require('path')
const fs = require('fs')


router.post('/api/addcase',auth ,async (req,res) => {
    //const task = new Task(req.body)
    const file = new Case({...req.body, lawyer: req.user._id})
    try {
        await file.save()
        res.status(201).send(file)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/api/cases',auth, async (req,res) => {
    const match = {}
    const sort = {}

    if (req.query.status) {
        if(req.query.status === "disposed") {
            match.status = "disposed"
        }
        if(req.query.status === "admitted") {
            match.status = "admitted"
        }
        if(req.query.status === "preAdmission") {
            match.status = "preAdmission"
        }
    }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try{
        await req.user.populate({
            path:'Cases',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.status(201).send(req.user.Cases)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/api/preadmittedcases', auth, async(req, res) => {
    try{
        const _id = req.user._id
        const data = await Case.find({lawyer:_id,status:"pre-admitted"})
        if(data) {
            res.status(201).send(data)
        } else {
            res.status(200).send({})
        }
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/api/admittedcases', auth, async(req, res) => {
    try{
        const _id = req.user._id
        const data = await Case.find({lawyer:_id,status:"admitted"})
        if(data) {
            res.status(201).send(data)
        } else {
            res.status(200).send({})
        }
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/api/disposedcases', auth, async(req, res) => {
    try{
        const _id = req.user._id
        const data = await Case.find({lawyer:_id,status:"disposed"})
        const temp = await Case.find({lawyer:_id, status:"rejected"})

        const data1 = [...data, ...temp]
        if(data1!=[]) {
            res.status(201).send(data1)
        } else {
            res.status(200).send({})
        }
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/api/case/:id', auth, async (req,res) => {
    const _id = req.params.id
    try {
        const data = await Case.findById(_id)
        res.status(201).send(data);
    } catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/api/makedispose', auth, async(req, res) =>{
    try {
        const _id = req.body._id
        const data = await Case.findById({_id})
        data.status = 'disposed'
        await data.save()
        res.status(201).send(data)   
    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch('/api/case/:id', auth, async (req,res) => {
    const _id = req.params.id
    try {
        caseData = await Case.findById(_id)
        if(!caseData) {
            res.status(404).send();
        }
        caseData.details = req.body.details
        await caseData.save()
        res.status(201).send(caseData)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/api/editcase/:id', auth, async (req,res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    try {
        const caseData = await Case.findById(_id)
        updates.forEach((update) => caseData[update] = req.body[update])
        if(!caseData) {
            res.status(404).send();
        }
        await caseData.save()
        res.status(201).send(caseData)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/api/case/:id', auth, async(req, res) => {
    const _id = req.params.id
    try {
        const caseData = await Case.findOneAndRemove({_id})
        if(!caseData) {
            res.status(404).send()
        }
        res.status(200).send({message:"Successfully Removed."})
    } catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/api/case/order/:id', auth, async(req, res) => {
    const _id = req.params.id
    try {
        const caseData = await Case.findById(_id)
        if(!caseData) {
            res.status(404).send()
        }
        caseData.orders = caseData.orders.concat(req.body.order)
        await caseData.save()
        res.status(201).send(caseData)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/api/linkClient/:id', auth, async(req, res) => {
    try{
    const id = req.params.id
    const _id = req.body._id

    const caseData = await Case.findById({_id: id})
    const client = await Client.findById({_id})

    caseData.client = _id
    client.cases = client.cases.concat({case: id})

    // await client.populate({path:'Cases'}).execPopulate()
    // console.log(client.Cases)

    await caseData.save()
    await client.save()
    res.status(201).send(caseData)
    } catch(e) {
        res.status(500).send(e) 
    }
})

// router.get('/api/linkClient',auth, async (req,res) => {
//     const match =  { client = req.body.client}
//     const sort = {}

//     if (req.query.status) {
//         if(req.query.status === "disposed") {
//             match.status = "disposed"
//         }
//         if(req.query.status === "admitted") {
//             match.status = "admitted"
//         }
//         if(req.query.status === "preAdmission") {
//             match.status = "preAdmission"
//         }
//     }

//     if (req.query.sortBy) {
//         const parts = req.query.sortBy.split(':')
//         sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
//     }

//     try{
//         await req.user.populate({
//             path:'Cases',
//             match,
//             options: {
//                 limit: parseInt(req.query.limit),
//                 skip: parseInt(req.query.skip),
//                 sort
//             }
//         }).execPopulate()
//         res.status(201).send(req.user.Cases)
//     } catch(e) {
//         res.status(500).send(e)
//     }
// })

router.get('/api/getLinkedClient/:id', auth, async(req,res)=> {
    try {
        const _id =  req.params.id
        const caseData = await Case.findById({_id})
        if(caseData.client) {
        const client = await Client.findById({_id:caseData.client})
        res.status(201).send(client) }
        else {
        res.status(201).send({})}
    } catch(e) {
        res.status(500).send(e)
    }
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'Docs'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
var upload = multer({ storage: storage,
    fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
        return cb(new Error({message: 'Please upload an pdf'}))
    }
    cb(undefined, true)
} })

router.post('/api/addDoc/:id',auth, upload.array('doc'), async(req, res) => {
    try {
        const _id = req.params.id
        const data = await Case.findById({_id})

        if(req.files.length > 0){
            req.files.map(file => {

                data.docs = data.docs.concat({ path: file.destination + '\\' + file.filename, filename: file.originalname,
                 size: file.size, createdAt: Date.now()})
            });
        }
        await data.save()
        res.status(201).json(data)
    } catch (e) {
        res.status(404).json({ message: 'Data not found', errors: e.stack , body: req.body})
    }
})

router.patch('/api/deleteDoc/:id',auth, upload.array(), async(req,res) => {
    try{
        const doc = req.body
        const _id = req.params.id
        const caseData = await Case.findById({_id})

        caseData.docs = caseData.docs.filter(function(e) {return e._id != doc._id})
        const data = doc.path

        fs.unlink(data, (err) => {
            if (err) {
              res.status(404).json({message:"no such file exists."})
              return
            }
            res.status(201).json(caseData)})
        await caseData.save()
    } catch(e) {
        res.status(404).json({message: 'Data not found'})
    }
})

module.exports = router
const express = require('express')
const User = require("../Schema/user")
const Lawyer = require("../Schema/lawyer")
const Client = require("../Schema/client")
const auth = require('../middleware/Auth')
const router = new express.Router()
const Case = require("../Schema/case");
const { sendReminderEmailLawyer, sendReminderEmailClient } = require('./mail')
path = require('path')
const crypto = require('crypto');
let mongoose = require('mongoose');

let conn = mongoose.createConnection('mongodb://localhost/project', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
let multer = require('multer');
let GridFsStorage = require('multer-gridfs-storage');
let Grid = require('gridfs-stream');
const ChatRoom = require('../Schema/chatroom')
Grid.mongo = mongoose.mongo;
let gfs;
conn.once('open', function() {
    gfs = Grid(conn.db)
})

// const url = 'mongodb://localhost/project';
// const connect = mongoose.createConnection('mongodb://localhost/project', {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
// let gfs ;
// connect.once('open', () => {
//     gfs = new mongoose.mongo.GridFSBucket(connect.db, { bucketName: "uploads"})
// });

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
        const caseData = await Case.findById({_id})
        updates.forEach((update) => caseData[update] = req.body[update])
        await caseData.save()
        res.status(201).send(caseData)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/api/editlawyerprofile',auth,async(req,res)=>{
  const user = {...req.user._doc}
  const updates = Object.keys(req.body)
    try {
        const lawyer = await Lawyer.findOne({userId: user._id})
        updates.forEach((update) => lawyer[update] = req.body[update])
        await lawyer.save()
        res.status(201).send(lawyer)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/api/editclientprofile',auth,async(req,res)=>{
  const user = {...req.user._doc}
  const updates = Object.keys(req.body)
    try {
        const client = await Client.findOne({userId: user._id})
        updates.forEach((update) => client[update] = req.body[update])
        await client.save()
        res.status(201).send(client)
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
        caseData.docs.forEach((e)=> gfs.remove({filename: e.filename}, function(err){ if(err){ throw new Error('error')}}))
        res.status(200).send({message:"Successfully Removed."})
    } catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/api/case/order/:id', auth, async(req, res) => {
    const _id = req.params.id
    try {
        const caseData = await Case.findById({_id})
        if(!caseData) {
            res.status(404).send()
        }
        const lawyer = await Lawyer.findOne({userId: caseData.lawyer})
        const user = await User.findById({_id: caseData.lawyer})
        // sendReminderEmailLawyer(user.email, lawyer.firstname, req.body.order.orderDate, caseData.stampNo, req.body.order.orderNote)
        // if(caseData.client) {
        //     const client = await Client.findOne({userId: caseData.client})
        //     const userTemp = await User.findById({_id: caseData.client})
        //     sendReminderEmailclient(userTemp.email, client.firstname, req.body.order.orderDate, caseData.stampNo, req.body.order.orderNote)
        // }
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
    const userId = req.body.userId

    const caseData = await Case.findById({_id: id})
    const client = await Client.findOne({userId})

    caseData.client = userId
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

router.get('/api/getLinkedClient/:id', auth, async(req,res)=> {
    try {
        const _id =  req.params.id
        const caseData = await Case.findById({_id})
        if(caseData.client) {
            const client = await Client.findOne({ userId :caseData.client})
            res.status(201).send(client)
        }
        else {
        res.status(201).send({})}
    } catch(e) {
        res.status(500).send(e)
    }
})

const storage = new GridFsStorage({
    // url: 'mongodb+srv://root:root@cluster0.1s4e6.mongodb.net/test',
    url: 'mongodb://localhost/project',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buf) => {
            if (err) {
              return reject(err);
            }
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
              filename: filename
            };
            resolve(fileInfo);
          });
        });
      }
    });
    const upload = multer({ storage,  fileFilter(req, file, cb) {
             if (!file.originalname.match(/\.(pdf)$/)) {
                 return cb(new Error({message: 'Please upload an pdf'}))
             }
             cb(undefined, true)
         } });

router.post('/api/uploadPdf/:id',upload.array('file') ,async (req, res, next) => {
    try {
                const _id = req.params.id
                const data = await Case.findById({_id})

                if(req.files.length > 0){
                    req.files.map(file => {
                        data.docs = data.docs.concat({ filename: file.filename, contentType : file.contentType,
                        originalname: file.originalname, size: file.size, createdAt: Date.now()})
                    });
                }
                await data.save()
                res.status(201).json(data.docs)
            } catch (e) {
                res.status(404).json({ message: 'Data not found', errors: e.stack , body: req.body})
            }
});

router.get('/api/file/:filename',async (req, res) => {
    let filesData = [];
    let count = 0;
    // gfs.collection('ctFiles'); // set the collection to look up into

    gfs.files.find({ filename: req.params.filename}).toArray((err, files) => {
        // Error checking
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }

    var readstream = gfs.createReadStream({
        filename: files[0].filename,
    });

    res.set('Content-type', files[0].contentType)
    return readstream.pipe(res);
        // res.status(200).json({file: files[0]});
    });
});

router.get('/api/files', (req, res) => {
    let filesData = [];
    let count = 0; // set the collection to look up into

    gfs.files.find({}).toArray((err, files) => {
        // Error checking
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // Loop through all the files and fetch the necessary information
        res.json(files);
    });
});

router.delete('/api/deletefile/:filename', (req, res) => {
    gfs.remove({filename: req.params.filename}, function (err) {
        if (err){ return handleError(err); }
      });
    res.status(200).send({message: "file deleted Successfully."})
})

router.patch('/api/updateDoc/:id', auth,async (req, res) => {
    try {
        const _id = req.params.id
        const data = await Case.findById({_id})
        data.docs = req.body
        await data.save()
        res.status(201).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/api/calendarOrders', auth, async(req, res) => {
    try{
        const _id = req.user._id
        const data = await Case.find({lawyer:_id,status:"admitted"})
        const temp = await Case.find({lawyer:_id, status:"pre-admitted"})

        const data1 = [...data, ...temp]

        let orders = [];
        data1.forEach(function(e) {
            if(e.orders != []){
            orders = orders.concat(e.orders)}
        })
        if(data1!=[]) {
            res.status(201).send(orders)
        } else {
            res.status(200).send({})
        }
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/api/getClientCases', auth, async(req,res) => {
    try {
        await req.user.populate({path:'Cases_client'}).execPopulate()
        res.status(201).send(req.user.Cases_client)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/api/getLinkedLawyer/:id', auth, async(req,res)=> {
    try {
        const _id =  req.params.id
        const caseData = await Case.findById({_id})
        if(caseData.lawyer) {
            const lawyer = await Lawyer.findOne({ userId :caseData.lawyer})
            res.status(201).send(lawyer)
        }
        else {
        res.status(201).send({})}
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/api/lawyer/getchatrooms',auth, async(req, res) => {
    try {
        const _id = req.user._id
        const data = await ChatRoom.find({lawyer: _id})
        let result = []
        for (let index = 0; index < data.length; index++) {
            const element = data[index].client;
            const temp = await Client.findOne({userId: element})
            result.push(temp)
        }
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/api/client/getchatrooms',auth, async(req, res) => {
    try {
        const _id = req.user._id
        const data = await ChatRoom.find({client: _id})
        let result = []
        for (let index = 0; index < data.length; index++) {
            const element = data[index].lawyer;
            const temp = await Lawyer.findOne({userId: element})
            result.push(temp)
        }
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/api/lawyerDashboard', auth, async(req, res) => {
    try {
        const _id = req.user._id
        const cases = await Case.find({lawyer: _id})
        const total_cases = cases.length
        total_admitted = 0
        total_disposed = 0
        let clients = []
        for (let index = 0; index < cases.length; index++) {
            if(cases[index].status === "admitted") {
                total_admitted = total_admitted + 1
            }
            if(cases[index].status === "disposed") {
                total_disposed = total_disposed + 1
            }
            if(cases[index].client) {
                if(!clients.includes(String(cases[index].client))){
                    clients.push(String(cases[index].client))
                }
            }
        }
        res.status(201).send({total_cases, total_admitted, total_disposed, total_clients: clients.length})
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

router.get('/api/clientDashboard', auth, async(req, res) => {
    try {
        const _id = req.user._id
        const cases = await Case.find({client: _id})
        const total_cases = cases.length
        total_admitted = 0
        total_disposed = 0
        for (let index = 0; index < cases.length; index++) {
            if(cases[index].status === "admitted") {
                total_admitted = total_admitted + 1
            }
            if(cases[index].status === "disposed") {
                total_disposed = total_disposed + 1
            }
        }
        res.status(201).send({total_cases, total_admitted, total_disposed})
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/api/getClientList', auth, async(req, res) => {
    try {
        const _id = req.user._id
        const cases = await Case.find({lawyer: _id})
        let clients = []
        for (let index = 0; index < cases.length; index++) {
            if(cases[index].client) {
                if(!clients.includes(String(cases[index].client))){
                    const temp = await Client.findOne({userId: cases[index].client})
                    clients.push(temp)
                }
            }
        }
        res.status(201).send(clients)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/api/getLawyerList', auth, async(req, res) => {
  try {
      const _id = req.user._id
      const cases = await Case.find({client: _id})
      let lawyers = []
      for (let index = 0; index < cases.length; index++) {
              if(!lawyers.includes(String(cases[index].lawyer))){
                  const temp = await Lawyer.findOne({userId: cases[index].lawyer})
                  const temp1 = await User.findById({ _id })
                  lawyers.push({...temp._doc, email: temp1.email })
              }
      }
      res.status(201).send(lawyers)
  } catch (error) {
      res.status(500).send(error)
  }
})

router.get('/api/getLawyerProfile', auth, async(req,res)=>{
  try {
    const user = {...req.user._doc}
    const lawyer = await Lawyer.findOne({userId: user._id})
    if(lawyer){
      res.status(201).send({...lawyer._doc, email: user.email})
    }
    else{
      res.status(404).send({})
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/api/getClientProfile', auth, async(req,res)=>{
  try {
    const user = {...req.user._doc}
    const client = await Client.findOne({userId: user._id})
    if(client){
      res.status(201).send({...client._doc})
    }
    else{
      res.status(404).send({})
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router

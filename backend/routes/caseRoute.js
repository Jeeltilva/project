const express = require('express')
const User = require("../Schema/user")
const Lawyer = require("../Schema/lawyer")
const Client = require("../Schema/client")
const auth = require('../middleware/Auth')
const router = new express.Router()
const Case = require("../Schema/case");
path = require('path')
const crypto = require('crypto');
let mongoose = require('mongoose');

let conn = mongoose.createConnection('mongodb://localhost/project');
let multer = require('multer');
let GridFsStorage = require('multer-gridfs-storage');
let Grid = require('gridfs-stream');
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

const storage = new GridFsStorage({
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

module.exports = router
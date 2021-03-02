const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    firstname: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    birthdate:{
        type: Date,
        required: true,
        trim: true
    },
    phnno: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    cases: [{
        case : {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cases'
        }
      }],
},
    // avatar: {
    //     type: Buffer
    // },
    {
    timestamps: true
})


const Client = mongoose.model('Clients', clientSchema)

module.exports = Client 
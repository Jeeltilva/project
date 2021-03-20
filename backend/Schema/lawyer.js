const mongoose = require('mongoose')

const lawyerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        lowercase: true,
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
    year: {
        type: Number,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    uni: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    prac: {
        type: String,
        required: true,
        trim: true
    },
    bcn: {
        type: String,
        required: true,
        trim: true
    },
    nationality: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
    // avatar: {
    //     type: Buffer
    // },
    {
    timestamps: true
})

const Lawyer = mongoose.model('Lawyers', lawyerSchema)

module.exports = Lawyer 
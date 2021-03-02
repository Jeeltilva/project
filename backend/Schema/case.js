const mongoose = require('mongoose')

const caseSchema = new mongoose.Schema({
  stampNo: { type: String},
  fillingDate: { type: Date},
  status: { type: String},
  bench: { type: String},
  petitioner: { type: String},
  respondent: { type: String},
  forum: {type: String },
  district: { type: String},
  postalCode: { type: String },
  act: { type: String},
  RegNo: { type: String},
  RegDate: { type: Date},
  stage: { type: String},
  description: { type: String},
  details: {
    type: String,
    default: "<p>Enter your details here...</p>"
  },
  orders: [{
      id : {
        type : String,
      },
      orderDate : {
        type : Date,
      },
      orderNote : {
        type : String,
        default : "No Note has been added"
      }
  }],
  notes:[{
    title: {
      type: String,
    },
    note: {
      type : String,
    },
    createdAt: {
      type : Date,
    }
  }],
  docs:[{
    filename: {
      type : String,
    },
    contentType: {
      type : String,
    },
    originalname: {
      type: String,
    },
    size: {
      type: String,
    },
    createdAt: {
      type : Date,
    }
  }],
  client : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lawyer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
}
})

const Case = mongoose.model('Cases', caseSchema)

module.exports = Case 
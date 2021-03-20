const express = require('express')
const router = new express.Router()
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lawyer.portal2020@gmail.com',
      pass: 'LawyerSite'
    }
  });
  
  const mailOptions = {
    from: 'lawyer.portal2020@gmail.com',
    to: 'kalagivora@gmail.com',
    subject: 'Reminder!',
    text: 'Just a reminder'
  };

  const sendWelcomeEmail = (email, name) => {
    transporter.sendMail({
        from: 'lawyer.portal2020@gmail.com',
        to: email,
        subject: 'Welcome!',
        text: `Hello ${name}! welcome to Lawyer Portal. Thank you for signing up!`
      }, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  }

  const sendReminderEmailLawyer = (email, name, date,  caseNo, note) => {
    const temp = new Date(date)
    const x1 = temp.getDate()
    const x2 = temp.getMonth()
    const x3 = temp.getYear()
    const dateTemp = new Date(x3+1900, x2, x1-1, 9, 00, 0);
    console.log('reminder is set for ', dateTemp.toUTCString())
    const job = schedule.scheduleJob(dateTemp, function(){
    transporter.sendMail({
        from: 'lawyer.portal2020@gmail.com',
        to: email,
        subject: 'Reminder for Hearing Date!',
        text: `Hello ${name}! Tommorow On date ${temp.toDateString()} you have hearing for case ${caseNo}.
Note: ${note}`
      }, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  })
}

const sendReminderEmailClient = (email, name, date,  caseNo, note) => {
    const temp = new Date(date)
    const x1 = temp.getDate()
    const x2 = temp.getMonth()
    const x3 = temp.getYear()
    const dateTemp = new Date(x3+1900, x2, x1-1, 9, 00, 0);
    console.log('reminder is set for ', dateTemp.toUTCString())
    const job = schedule.scheduleJob(dateTemp, function(){
    transporter.sendMail({
        from: 'lawyer.portal2020@gmail.com',
        to: email,
        subject: 'Reminder for Hearing Date!',
        text: `Hello ${name}! Tommorow On date ${temp.toDateString()} you have hearing for case ${caseNo}.
Note: ${note}`
      }, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  })
}
module.exports = {
    sendWelcomeEmail,
    sendReminderEmailLawyer,
    sendReminderEmailClient
}
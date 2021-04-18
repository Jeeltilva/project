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
        bcc: ['kalagivora@gmail.com', 'jeeltilva@gmail.com'],
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
}

const sendReminderEmailClient = (email, name, date,  caseNo, note) => {
    const temp = new Date(date)
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
}

const verifyEmail = (email, uniqueString) => {
  transporter.sendMail({
      from: 'lawyer.portal2020@gmail.com',
      to: email,
      subject: 'Email Verification',
      html:`<h3>Hello!</h3>
            <p>Please Click <a href=http://localhost:4000/api/verify/${uniqueString} target="_self"> here </a> to verify your email.</p>
            <p>If you did not create an account, no further action is required.</p>
            <br>
            <p>Thanks,<br>
            Lawyer Portal<p>
            <hr>
            <small>If you’re having trouble clicking the "Verify Email Address" button, copy and paste the URL below into your web browser: <br>http://localhost:4000/api/verify/${uniqueString}</small>`
    }, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

const linkedToCase = (email, caseNo) => {
  transporter.sendMail({
      from: 'lawyer.portal2020@gmail.com',
      to: email,
      subject: 'Access to Information of Case',
      html: `<p>You are linked with the case ${caseNo}</p><p>Now you can Interact with your Lawyer</p><br><small><i>Thank you!</i></small>`
    }, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

module.exports = {
    sendWelcomeEmail,
    sendReminderEmailLawyer,
    sendReminderEmailClient,
    verifyEmail,
    linkedToCase
}

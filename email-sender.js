const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',     // Your Gmail address
    pass: 'your-app-password',        
  },
});

const mailOptions = {
  from: 'your.email@gmail.com',
  to: 'your.email@gmail.com',         // You can send email to yourself
  subject: 'Test Email from Node.js',
  text: 'Hello! This is a test email sent using Node.js and Nodemailer.',
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent: ' + info.response);
});
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var credentials = require('../credentials.js')

var mailTransport = nodemailer.createTransport(smtpTransport({
    host: 'smtp.qq.com',
    secure: true,
    port: 465,
    auth: {
        user: credentials.QQmail.user,
        pass: credentials.QQmail.password,
    }
}));

var mailOptions = {
    from: '"hyteer"  <hyteer@qq.com>', // sender address 
    to: '40577190@qq.com, sillysir@qq.com', // list of receivers 
    subject: 'Nodemailer Test', // Subject line 
    html: '<img src="http://localhost:3000/img/logo.png" alt="Test">' +
    '<h2>Nodemailer(Test)</h2><p>This mail sent by'+
    ' nodemailer is just for testing. </p><em style="color:sienna;margin-left:30em;"><a href= "http://'+
    'github.com"> --hyteer</a></em>', // html body 
    text: 'A test mail sent by nodemailer!',
};
 
// send mail with defined transport object 
mailTransport.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
 
});
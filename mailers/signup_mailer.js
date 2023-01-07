const nodeMailer = require('../config/nodemailer');

exports.newUserSignUp = ( email)=>{
  console.log('inside new user mailer');

  nodeMailer.transporter.sendMail({
    from: 'sanjayfbd93544@gmail.com',
    to: email,
    subject: "need an web developer",
    html: '<h1>yup, you are signed up successfully </h1>'
  },(err,info)=>{
    if(err){console.log('error in sending mail',err);return;}

    console.log('Message sent',info);
    return ;
  });
}
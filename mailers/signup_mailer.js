const nodeMailer = require('../config/nodemailer');

exports.newUserSignUp = (name,email)=>{
  console.log('inside new user mailer');
  let htmlString = nodeMailer.renderTemplate({name:name},'/signup_mailer.ejs')
  nodeMailer.transporter.sendMail({
    from: 'sanjayfbd93544@gmail.com',
    to: email,
    subject: "are you looking for a web developer ?",
    // html: '<h1>yup, you are signed up successfully </h1>'
    html: htmlString
  },(err,info)=>{
    if(err){console.log('error in sending mail',err);return;}

    console.log('Message sent',info);
    return ;
  });
}
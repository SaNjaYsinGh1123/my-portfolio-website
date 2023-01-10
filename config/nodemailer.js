const nodemailer = require('nodemailer');

const nodemailerinfo = require('./googleData');

const ejs = require('ejs');
const path = require('path');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: process.env.nodemailerUser,
        pass: process.env.nodemailerPass
    }
});


let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers'),
        data,
        function(err, template){
            if(err){console.log('error in rendering templete in nodemailer ',err);return;}

            mailHTML = template;
        }
    )

    return mailHTML;
}

module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}
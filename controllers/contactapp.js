const router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/contact.handlebars')
})

router.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'baby.treutel40@ethereal.email',
            pass: 'EqZAyzqCUjt5Bddygn'
        }
    })


    const mailOptions = {
        //let sendResult = await transporter.sendMail({
            from: 'baby truetel <baby.treutel40@ethereal.email>',
            to: 'baby.treutel40@ethereal.email',
            subject: `Message from ${req.body.email}: ${req.body.subject}`,
            text: req.body.message
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response)
            res.send('success')
        }
    })
})

module.exports = router;
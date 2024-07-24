
//Babel Configuration to run jsx in template
require('@babel/register')({
    configFile: './babel.config.js', // Path to your babel.config.js
});

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./Models/User');
const Create_PDF_Template = require('./Templates/pdfTemplate');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Express Middleware
app.use(express.json());
app.use(cors());

// Configure Multer for file uploads
const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
const upload = multer({
    limits: {
      fieldSize: 1024 * 1024 * 2,  // 2MB (adjust to your needs)
      fileSize: 1024 * 1024 * 10,  // 10MB (adjust to your needs)
    },
    storage: storage,
  });

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_EMAIL_PASSWORD,
    },

});
// Connection URL
const DB = "";
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB Atlas');

        //Server status endpoint
        app.get('/', (req, res) => {
            res.send('Server is Up!');
        });

        // Login endpoint
        app.post('/login', (req, res) => {
            const { email, password } = req.body;
            User.findOne({ userEmail: email })
                .then((user) => {
                    if (!user) {
                        return res.status(404).json({ error: 'User not found' });
                    }
                    if (user.userPassword !== password) {
                        return res.status(401).json({ error: 'Invalid password' });
                    }
                    return res.status(200).json(user);
                })
                .catch((err) => {
                    console.error('Error:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                });
        });

        // const UploadPDFtoSharepoint = () => {
        //     const push = async (file, fileName) => {
        //         const client = new aws.SecretsManager();
        //         const spURL = `https://<your site>.sharepoint.com/sites/<your specific subsite>/_api/web/GetFolderByServerRelativeUrl('Documents')/Files/Add(url='${fileName}', overwrite=true)`;
        //         try {
        //             const data = await client.getSecretValue({ SecretId: '<whatever you called your secret>' }).promise();
        //             const secret = JSON.parse(data.SecretString).<secret>;
        //             const getToken = await axios.post('https://accounts.accesscontrol.windows.net/<sharepoint resource id>/tokens/OAuth/2',
        //                 querystring.stringify({
        //                     grant_type: 'client_credentials',
        //                     client_id: '<ask your sharepoint person for this its a something@tenant id>',
        //                     client_secret: secret,
        //                     resource: '<ask your sharepoint person>'
        //                 }), {
        //                 headers: {
        //                     "Content-Type": "application/x-www-form-urlencoded"
        //                 }
        //             }
        //             )
        //             const accessToken = getToken.data.access_token;
        //             const getRequestDigest = await axios.post('https://<your site>.sharepoint.com/sites/<your specific subsite>/_api/contextinfo', {}, {
        //                 headers: {
        //                     "Authorization": `Bearer ${accessToken}`,
            
        //                 }
        //             })
        //             const formDigestValue = getRequestDigest.data.FormDigestValue;
        //             await axios.post(spURL, file, {
        //                 maxBodyLength: Infinity,
        //                 maxContentLength: Infinity,
        //                 headers: {
        //                     'Authorization': `Bearer ${token}`,
        //                     'X-RequestDigest': formDigestValue
        //                 }
        //             })
        //             logger.info("Success");
        //         } catch (e) {
        //             logger.error(e);
        //         }
        //     }
        // }

        // Handle POST request for the PDF file and images
        app.post('/send-report', upload.any(), async (req, res) => {
            const logo1 = req.body.logo1;
            const logo2 = req.body.logo2;
            const formData = JSON.parse(req.body.data);
            const pdfStream = await Create_PDF_Template({ 'formData': formData, 'logo1': logo1, 'logo2': logo2 });
            const imageFiles = req.files
                .filter(file => file.fieldname.startsWith('image'))
                .map(file => ({
                    originalname: file.originalname,
                    buffer: file.buffer,
                    mimetype: file.mimetype,
                }));

            if (imageFiles.length === 0) {
                console.log('No Image Found!');
                // Send email with pdf and images as attachments
                const mailOptions = {
                    from: process.env.SENDER_EMAIL,
                    to: process.env.RECEIVER_EMAIL,
                    subject: 'Site Shift Report!',
                    text: 'Your Site Shift Report is attached with this email.',
                    attachments: [
                        {
                            filename: 'Site Shift Report.pdf',
                            content: pdfStream,
                        },
                    ],
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log('Error sending email:', error);
                        return res.status(500).send('Error sending email.');
                    }
                    console.log('Email sent:', info.response);
                    res.status(200).send('PDF file received, processed, and sent in email.');
                });

            } else {
                console.log('Images Found!',);
                // Send email with pdf and images as attachments
                const mailOptions = {
                    from: process.env.SENDER_EMAIL,
                    to: process.env.RECEIVER_EMAIL,
                    subject: 'Site Shift Report and Images!',
                    text: 'Your Site Shift Report and images are attached with this email.',
                    attachments: [
                        {
                            filename: 'Site Shift Report.pdf',
                            content: pdfStream,
                        },
                        // Add image attachments
                        ...imageFiles.map((image) => ({
                            filename: image.originalname,
                            content: image.buffer,
                        })),
                    ],
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log('Error sending email:', error);
                        return res.status(500).send('Error sending email.');
                    }
                    console.log('Email sent:', info.response);
                    res.status(200).send('PDF file and image files received, processed, and sent in email.');
                });
            }
        });

        app.listen(port, () => {
            console.log(`Node/Express Server is Up......\nPort: localhost:${port}`);
        });
    })
    .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

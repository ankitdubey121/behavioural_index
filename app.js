const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000
app.use(cors())

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public', "home.html"));
});

app.post('/send-email', upload.none(), async (req, res) => {
    const { data } = req.body;

    // Parse JSON data
    const parsedData = JSON.parse(data);

    // Extract Questions
    const Questions = parsedData.filter(item => item.Question && item.Answer);

    // Extract Email and Name
    const { Email, Name } = parsedData.find(item => item.Email && item.Name);
    console.log(Email, Name)

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(Questions);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Responses");

    // Convert workbook to a buffer
    const buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });

    console.log(Questions)

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'workwithankitdubey@gmail.com',
            pass: 'iwve aqac adoi gqin'
        }
    });

    // Set up email data with unicode symbols
    const mailOptions = {
        from: 'workwithankitdubey@gmail.com', // sender address
        to: 'ankit.dubey@nutasteworld.com', // list of receivers
        subject: `${Name}'s Behavioral Matrix Responses`, // Subject line
        text: 'Please find the attached responses for the behavioral matrix.', // plain text body
        attachments: [
            {
                filename: `${Name}_responses.xlsx`,
                content: buffer
            }
        ]
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send(error.toString());
        }
        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Email sent');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

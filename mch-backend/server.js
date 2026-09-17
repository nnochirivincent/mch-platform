const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// ===============================
// Middleware
// ===============================
app.use(express.json());
app.use(cors());


// ===============================
// MongoDB Connection
// ===============================
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  family: 4
})
.then(() => {
  console.log('Connected to MongoDB Atlas successfully!');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});


// ===============================
// Subscriber Schema
// ===============================
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  dateSubscribed: {
    type: Date,
    default: Date.now
  }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);


// ===============================
// Activity Book URLs
// ===============================
const DOWNLOAD_URL =
  'https://mch-platform.vercel.app/tfim-coloring-book-2.pdf';

const BACKEND_PUBLIC_URL =
  process.env.BACKEND_PUBLIC_URL ||
  'https://mch-platform.onrender.com';


// ===============================
// Gmail + Nodemailer
// ===============================
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',

  // Gmail SSL SMTP
  port: 465,

  secure: true,

  // Give the connection enough time
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,

  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});


// ===============================
// Check Gmail Connection
// ===============================
transporter.verify((error, success) => {

  if (error) {

    console.error(
      'Gmail connection error:',
      error
    );

  } else {

    console.log(
      'Gmail is ready to send emails!'
    );

  }

});


// ===============================
// Send Activity Book Email
// ===============================
async function sendActivityBookEmail(name, email) {

  const downloadLink =
    `${BACKEND_PUBLIC_URL}/api/download-activity-book`;


  await transporter.sendMail({

    from:
      `"Magnifying Children's Horizons" <${process.env.GMAIL_USER}>`,

    to: email,

    subject:
      'Your Free Weaverton Activity Book is Ready!',

    html: `
      <!DOCTYPE html>

      <html>

        <head>

          <meta charset="UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>
            Your Weaverton Activity Book
          </title>

        </head>


        <body style="
          margin: 0;
          padding: 0;
          background-color: #f7f8f4;
          font-family: Arial, Helvetica, sans-serif;
          color: #1e3319;
        ">


          <div style="
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          ">


            <!-- HEADER -->

            <div style="
              background-color: #3c5e2a;
              padding: 32px 24px;
              text-align: center;
            ">

              <h1 style="
                margin: 0;
                color: #ffffff;
                font-size: 28px;
              ">

                Welcome to Weaverton!

              </h1>

            </div>


            <!-- CONTENT -->

            <div style="
              padding: 32px 28px;
            ">


              <h2 style="
                margin-top: 0;
                font-size: 22px;
                color: #1e3319;
              ">

                Hi ${name},

              </h2>


              <p style="
                font-size: 16px;
                line-height: 1.7;
                color: #2c3e24;
              ">

                Thank you for your interest in
                Magnifying Children's Horizons.

              </p>


              <p style="
                font-size: 16px;
                line-height: 1.7;
                color: #2c3e24;
              ">

                Your free
                <strong>
                  Welcome to Weaverton Activity Book
                </strong>
                is ready!

              </p>


              <p style="
                font-size: 16px;
                line-height: 1.7;
                color: #2c3e24;
              ">

                Click the button below to download your
                activity book and begin exploring,
                discovering and enjoying the world of
                Weaverton.

              </p>


              <!-- DOWNLOAD BUTTON -->

              <div style="
                text-align: center;
                margin: 32px 0;
              ">

                <a
                  href="${downloadLink}"
                  style="
                    display: inline-block;
                    background-color: #3c5e2a;
                    color: #ffffff;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 15px;
                    padding: 15px 28px;
                    border-radius: 10px;
                  "
                >

                  DOWNLOAD THE ACTIVITY BOOK →

                </a>

              </div>


              <p style="
                font-size: 13px;
                line-height: 1.6;
                color: #687363;
                text-align: center;
              ">

                If the button doesn't work,
                you can use this link:

              </p>


              <p style="
                font-size: 12px;
                line-height: 1.6;
                word-break: break-all;
                text-align: center;
              ">

                <a
                  href="${downloadLink}"
                  style="
                    color: #3c5e2a;
                  "
                >

                  ${downloadLink}

                </a>

              </p>


            </div>


            <!-- FOOTER -->

            <div style="
              background-color: #edf2eb;
              padding: 20px;
              text-align: center;
            ">

              <p style="
                margin: 0;
                font-size: 12px;
                color: #384a30;
              ">

                Magnifying Children's Horizons

              </p>

            </div>


          </div>

        </body>

      </html>
    `
  });


  console.log(
    `Activity book email sent to ${email}`
  );

}


// ===============================
// Force Activity Book Download
// ===============================
app.get(
  '/api/download-activity-book',
  async (req, res) => {

    try {

      const pdfResponse =
        await fetch(DOWNLOAD_URL);


      if (!pdfResponse.ok) {

        throw new Error(
          'Unable to retrieve activity book PDF.'
        );

      }


      const pdfBuffer =
        Buffer.from(
          await pdfResponse.arrayBuffer()
        );


      res.setHeader(
        'Content-Type',
        'application/pdf'
      );


      res.setHeader(
        'Content-Disposition',
        'attachment; filename="Welcome-To-Weaverton-Activity-Book.pdf"'
      );


      res.send(pdfBuffer);


    } catch (error) {

      console.error(
        'Activity book download error:',
        error
      );


      res.status(500).send(
        'Unable to download the activity book right now.'
      );

    }

  }
);


// ===============================
// Save Name + Email + Send Email
// ===============================
app.post(
  '/api/subscribe',
  async (req, res) => {

    try {

      const name =
        req.body.name?.trim();

      const email =
        req.body.email
          ?.trim()
          .toLowerCase();


      // ===============================
      // Validate Name
      // ===============================

      if (!name) {

        return res.status(400).json({

          error:
            'Please enter your name.'

        });

      }


      // ===============================
      // Validate Email
      // ===============================

      if (
        !email ||
        !email.includes('@')
      ) {

        return res.status(400).json({

          error:
            'Please enter a valid email address.'

        });

      }


      // ===============================
      // Check Existing Subscriber
      // ===============================

      let subscriber =
        await Subscriber.findOne({
          email
        });


      // ===============================
      // Create New Subscriber
      // ===============================

      if (!subscriber) {

        subscriber =
          new Subscriber({
            name,
            email
          });


        await subscriber.save();

      } else {

        // Update name if necessary

        if (!subscriber.name) {

          subscriber.name =
            name;

          await subscriber.save();

        }

      }


      // ===============================
      // Send Activity Book Email
      // ===============================

      await sendActivityBookEmail(
        subscriber.name || name,
        subscriber.email
      );


      // ===============================
      // Success Response
      // ===============================

      return res.status(200).json({

        success: true,

        message:
          'Thank you! We have sent the activity book download link to your email address.'

      });


    } catch (error) {

      console.error(
        'Subscription error:',
        error
      );


      return res.status(500).json({

        error:
          'Your details were saved, but we could not send the email right now. Please try again.'

      });

    }

  }
);


// ===============================
// Admin Subscribers Route
// ===============================
app.get(
  '/api/admin/subscribers',
  async (req, res) => {

    try {

      const subscribers =
        await Subscriber
          .find()
          .sort({
            dateSubscribed: -1
          });


      return res.status(200).json(
        subscribers
      );


    } catch (error) {

      console.error(
        'Fetch subscribers error:',
        error
      );


      return res.status(500).json({

        error:
          'Failed to fetch subscribers.'

      });

    }

  }
);


// ===============================
// Start Server
// ===============================
const PORT =
  process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    'Server is running smoothly on port ' +
    PORT
  );

});
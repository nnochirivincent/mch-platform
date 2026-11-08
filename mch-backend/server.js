
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();

const app = express();

// =====================================
// MIDDLEWARE
// =====================================

app.use(express.json({ limit: '1mb' }));

const allowedOrigins = [
  'http://localhost:5173',
  'https://mch-platform.vercel.app',
  'https://magnifyingchildrenhorizon.com',
  'https://www.magnifyingchildrenhorizon.com',
  ...(process.env.FRONTEND_URL || '')
    .split(',')
    .map(url => url.trim())
    .filter(Boolean)
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Origin not allowed by CORS'));
  }
}));

// =====================================
// MONGODB CONNECTION
// =====================================

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI is missing from environment variables.');
}

mongoose.connect(MONGO_URI, {
  family: 4
})
.then(() => {
  console.log('Connected to MongoDB Atlas successfully!');
})
.catch(error => {
  console.error('MongoDB connection error:', error);
});

// =====================================
// SUBSCRIBER MODEL
// =====================================

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

// =====================================
// CONTACT MESSAGE MODEL
// =====================================

const contactMessageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },

  lastName: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  topic: {
    type: String,
    required: true,
    trim: true
  },

  message: {
    type: String,
    required: true,
    trim: true
  },

  dateSubmitted: {
    type: Date,
    default: Date.now
  }
});

const ContactMessage = mongoose.model(
  'ContactMessage',
  contactMessageSchema
);

// =====================================
// ADMIN ACCOUNT MODEL
// =====================================

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },

  passwordHash: {
    type: String,
    required: true
  },

  accountType: {
    type: String,
    enum: ['programmer', 'owner'],
    required: true,
    unique: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Admin = mongoose.model('Admin', adminSchema);

// =====================================
// ACTIVITY BOOK URLS
// =====================================

const DOWNLOAD_URL =
  'https://mch-platform.vercel.app/tfim-coloring-book-2.pdf';

const BACKEND_PUBLIC_URL =
  process.env.BACKEND_PUBLIC_URL ||
  'https://mch-platform-1.onrender.com';

// =====================================
// GMAIL + NODEMAILER
// =====================================

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,

  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,

  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

transporter.verify((error) => {
  if (error) {
    console.error('Gmail connection error:', error);
  } else {
    console.log('Gmail is ready to send emails!');
  }
});

// =====================================
// HELPER: ESCAPE HTML
// =====================================

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    return entities[character];
  });
}

// =====================================
// SEND ACTIVITY BOOK EMAIL
// =====================================

async function sendActivityBookEmail(name, email) {
  const downloadLink =
    `${BACKEND_PUBLIC_URL}/api/download-activity-book`;

  await transporter.sendMail({
    from: `"Magnifying Children's Horizons" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Your Free Weaverton Activity Book is Ready!',

    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Your Weaverton Activity Book</title>
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

            <div style="
              background-color: #3c5e2a;
              padding: 32px 24px;
              text-align: center;
            ">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">
                Welcome to Weaverton!
              </h1>
            </div>

            <div style="padding: 32px 28px;">

              <h2 style="margin-top: 0; font-size: 22px;">
                Hi ${escapeHtml(name)},
              </h2>

              <p style="font-size: 16px; line-height: 1.7;">
                Thank you for your interest in Magnifying Children's Horizons.
              </p>

              <p style="font-size: 16px; line-height: 1.7;">
                Your free <strong>Welcome to Weaverton Activity Book</strong>
                is ready!
              </p>

              <p style="font-size: 16px; line-height: 1.7;">
                Click the button below to download your activity book
                and begin exploring, discovering and enjoying Weaverton.
              </p>

              <div style="text-align: center; margin: 32px 0;">
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

              <p style="font-size: 13px; text-align: center;">
                If the button doesn't work, use this link:
              </p>

              <p style="
                font-size: 12px;
                word-break: break-all;
                text-align: center;
              ">
                <a href="${downloadLink}" style="color: #3c5e2a;">
                  ${downloadLink}
                </a>
              </p>

            </div>

            <div style="
              background-color: #edf2eb;
              padding: 20px;
              text-align: center;
            ">
              <p style="margin: 0; font-size: 12px;">
                Magnifying Children's Horizons
              </p>
            </div>

          </div>

        </body>
      </html>
    `
  });

  console.log(`Activity book email sent to ${email}`);
}

// =====================================
// ACTIVITY BOOK DOWNLOAD
// =====================================

app.get('/api/download-activity-book', async (req, res) => {
  try {
    const pdfResponse = await fetch(DOWNLOAD_URL);

    if (!pdfResponse.ok) {
      throw new Error('Unable to retrieve activity book PDF.');
    }

    const pdfBuffer = Buffer.from(
      await pdfResponse.arrayBuffer()
    );

    res.setHeader('Content-Type', 'application/pdf');

    res.setHeader(
      'Content-Disposition',
      'attachment; filename="Welcome-To-Weaverton-Activity-Book.pdf"'
    );

    return res.send(pdfBuffer);

  } catch (error) {
    console.error('Activity book download error:', error);

    return res.status(500).send(
      'Unable to download the activity book right now.'
    );
  }
});

// =====================================
// SUBSCRIBE TO ACTIVITY BOOK
// =====================================

app.post('/api/subscribe', async (req, res) => {
  try {
    const name =
      typeof req.body.name === 'string'
        ? req.body.name.trim()
        : '';

    const email =
      typeof req.body.email === 'string'
        ? req.body.email.trim().toLowerCase()
        : '';

    if (!name) {
      return res.status(400).json({
        error: 'Please enter your name.'
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        error: 'Please enter a valid email address.'
      });
    }

    let subscriber = await Subscriber.findOne({ email });

    if (!subscriber) {
      subscriber = await Subscriber.create({
        name,
        email
      });
    } else if (!subscriber.name) {
      subscriber.name = name;
      await subscriber.save();
    }

    await sendActivityBookEmail(
      subscriber.name || name,
      subscriber.email
    );

    return res.status(200).json({
      success: true,
      message:
        'Thank you! We have sent the activity book download link to your email address.'
    });

  } catch (error) {
    console.error('Subscription error:', error);

    return res.status(500).json({
      error:
        'Your details were saved, but we could not send the email right now. Please try again.'
    });
  }
});

// =====================================
// CONTACT FORM SUBMISSION
// =====================================

app.post('/api/contact', async (req, res) => {
  try {
    const firstName =
      typeof req.body.firstName === 'string'
        ? req.body.firstName.trim()
        : '';

    const lastName =
      typeof req.body.lastName === 'string'
        ? req.body.lastName.trim()
        : '';

    const email =
      typeof req.body.email === 'string'
        ? req.body.email.trim().toLowerCase()
        : '';

    const topic =
      typeof req.body.topic === 'string'
        ? req.body.topic.trim()
        : '';

    const message =
      typeof req.body.message === 'string'
        ? req.body.message.trim()
        : '';

    if (
      !firstName ||
      !lastName ||
      !email ||
      !topic ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all contact form fields.'
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    if (
      firstName.length > 100 ||
      lastName.length > 100 ||
      email.length > 254 ||
      topic.length > 150 ||
      message.length > 10000
    ) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields are too long.'
      });
    }

    const contactMessage = await ContactMessage.create({
      firstName,
      lastName,
      email,
      topic,
      message
    });

    let emailSent = true;

    try {
      await transporter.sendMail({
        from: `"Magnifying Children's Horizons" <${process.env.GMAIL_USER}>`,

        to: 'hello@magnifyingchildrenshorizons.com',

        replyTo: email,

        subject: `New MCH Contact Message: ${topic}`,

        text: `
New Contact Form Submission

Name: ${firstName} ${lastName}

Email: ${email}

Topic: ${topic}

Message:

${message}

Date: ${contactMessage.dateSubmitted}
        `
      });

      console.log(`Contact notification sent for ${email}`);

    } catch (emailError) {
      emailSent = false;

      console.error(
        'Contact notification email error:',
        emailError
      );
    }

    return res.status(201).json({
      success: true,
      emailSent,
      message: emailSent
        ? 'Thank you! Your message has been received successfully.'
        : 'Your message was saved successfully, but the email notification could not be sent.'
    });

  } catch (error) {
    console.error('Contact form submission error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to submit your message right now. Please try again.'
    });
  }
});

// =====================================
// ADMIN SECURITY CONFIGURATION
// =====================================

function getAdminTokenSecret() {
  return process.env.ADMIN_JWT_SECRET;
}

function authenticateAdmin(req, res, next) {
  const authorization = req.headers.authorization || '';

  if (!authorization.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Please log in to access this resource.'
    });
  }

  const token = authorization.slice(7);

  try {
    const secret = getAdminTokenSecret();

    if (!secret) {
      return res.status(500).json({
        success: false,
        message: 'Admin security is not configured.'
      });
    }

    const decoded = jwt.verify(token, secret);

    if (
      decoded.role !== 'admin' ||
      !decoded.adminId ||
      !['programmer', 'owner'].includes(decoded.accountType)
    ) {
      return res.status(403).json({
        success: false,
        message: 'Administrator access required.'
      });
    }

    req.admin = decoded;

    return next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Your login session has expired. Please log in again.'
    });
  }
}

// =====================================
// CHECK FIRST ADMIN SETUP
// =====================================

app.get('/api/admin/setup-status', async (req, res) => {
  try {
    const programmerExists = await Admin.exists({
      accountType: 'programmer'
    });

    return res.status(200).json({
      setupRequired: !programmerExists
    });

  } catch (error) {
    console.error('Admin setup status error:', error);

    return res.status(500).json({
      message: 'Unable to check administrator setup.'
    });
  }
});

// =====================================
// FIRST ADMIN REGISTRATION
// PROGRAMMER ACCOUNT ONLY
// =====================================

app.post('/api/admin/setup', async (req, res) => {
  try {
    const { email, password, setupKey } = req.body;

    if (
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      typeof setupKey !== 'string'
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all setup details.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    if (password.length < 12 || password.length > 128) {
      return res.status(400).json({
        success: false,
        message: 'Your password must be between 12 and 128 characters.'
      });
    }

    const expectedKey = process.env.ADMIN_SETUP_KEY;

    if (!expectedKey || !getAdminTokenSecret()) {
      return res.status(500).json({
        success: false,
        message: 'Admin security environment variables are not configured.'
      });
    }

    const suppliedBuffer = Buffer.from(setupKey);
    const expectedBuffer = Buffer.from(expectedKey);

    if (
      suppliedBuffer.length !== expectedBuffer.length ||
      !crypto.timingSafeEqual(suppliedBuffer, expectedBuffer)
    ) {
      return res.status(403).json({
        success: false,
        message: 'The administrator setup key is incorrect.'
      });
    }

    const existingProgrammer = await Admin.exists({
      accountType: 'programmer'
    });

    if (existingProgrammer) {
      return res.status(403).json({
        success: false,
        message: 'Programmer registration has already been completed.'
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await Admin.create({
      email: cleanEmail,
      passwordHash,
      accountType: 'programmer'
    });

    console.log('MCH programmer administrator account created.');

    return res.status(201).json({
      success: true,
      message: 'Programmer account created. You can now log in.'
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'This administrator account or account type already exists.'
      });
    }

    console.error('Admin setup error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to create the programmer account.'
    });
  }
});

// =====================================
// CREATE SECOND ADMIN
// PROGRAMMER ACCOUNT ONLY
// =====================================

app.post(
  '/api/admin/create-owner',
  authenticateAdmin,
  async (req, res) => {
    try {
      // Confirm that the logged-in account is still
      // the registered programmer account.
      const programmer = await Admin.findOne({
        _id: req.admin.adminId,
        accountType: 'programmer'
      });

      if (!programmer) {
        return res.status(403).json({
          success: false,
          message: 'Only the authorised programmer can create the owner account.'
        });
      }

      const ownerExists = await Admin.exists({
        accountType: 'owner'
      });

      if (ownerExists) {
        return res.status(403).json({
          success: false,
          message: 'The organisation owner account has already been created.'
        });
      }

      const { email, password } = req.body;

      if (
        typeof email !== 'string' ||
        typeof password !== 'string'
      ) {
        return res.status(400).json({
          success: false,
          message: 'Please provide the owner email and password.'
        });
      }

      const cleanEmail = email.trim().toLowerCase();

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
        return res.status(400).json({
          success: false,
          message: 'Please enter a valid owner email address.'
        });
      }

      if (password.length < 12 || password.length > 128) {
        return res.status(400).json({
          success: false,
          message: 'The password must be between 12 and 128 characters.'
        });
      }

      const passwordHash = await bcrypt.hash(password, 12);

      await Admin.create({
        email: cleanEmail,
        passwordHash,
        accountType: 'owner'
      });

      console.log('MCH organisation owner account created.');

      return res.status(201).json({
        success: true,
        message: 'Organisation owner account created successfully.'
      });

    } catch (error) {
      if (error.code === 11000) {
        return res.status(409).json({
          success: false,
          message: 'An administrator account with this email or account type already exists.'
        });
      }

      console.error('Create owner account error:', error);

      return res.status(500).json({
        success: false,
        message: 'Unable to create the owner account.'
      });
    }
  }
);

// =====================================
// ADMIN LOGIN
// =====================================

const loginAttempts = new Map();

app.post('/api/admin/login', async (req, res) => {
  try {
    const ip = req.ip;
    const now = Date.now();
    const attempt = loginAttempts.get(ip);

    if (attempt && now < attempt.blockedUntil) {
      return res.status(429).json({
        success: false,
        message: 'Too many login attempts. Please try again later.'
      });
    }

    const email =
      typeof req.body.email === 'string'
        ? req.body.email.trim().toLowerCase()
        : '';

    const password =
      typeof req.body.password === 'string'
        ? req.body.password
        : '';

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your email and password.'
      });
    }

    const admin = await Admin.findOne({ email });

    const passwordMatches = admin
      ? await bcrypt.compare(password, admin.passwordHash)
      : false;

    if (!admin || !passwordMatches) {
      const current = loginAttempts.get(ip) || {
        count: 0,
        blockedUntil: 0
      };

      current.count += 1;

      if (current.count >= 5) {
        current.count = 0;
        current.blockedUntil = now + 15 * 60 * 1000;
      }

      loginAttempts.set(ip, current);

      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    loginAttempts.delete(ip);

    const secret = getAdminTokenSecret();

    if (!secret) {
      return res.status(500).json({
        success: false,
        message: 'Admin security is not configured.'
      });
    }

    const token = jwt.sign(
      {
        adminId: admin._id.toString(),
        email: admin.email,
        accountType: admin.accountType,
        role: 'admin'
      },
      secret,
      {
        expiresIn: '8h'
      }
    );

    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      token,
      admin: {
        email: admin.email,
        accountType: admin.accountType
      }
    });

  } catch (error) {
    console.error('Admin login error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to log in right now.'
    });
  }
});

// =====================================
// VERIFY ADMIN SESSION
// =====================================

app.get(
  '/api/admin/verify',
  authenticateAdmin,
  async (req, res) => {
    try {
      const admin = await Admin.findById(req.admin.adminId);

      if (
        !admin ||
        admin.email !== req.admin.email ||
        admin.accountType !== req.admin.accountType
      ) {
        return res.status(401).json({
          success: false,
          message: 'Administrator account is no longer valid.'
        });
      }

      return res.status(200).json({
        success: true,
        admin: {
          email: admin.email,
          accountType: admin.accountType
        }
      });

    } catch (error) {
      console.error('Admin verification error:', error);

      return res.status(500).json({
        success: false,
        message: 'Unable to verify administrator session.'
      });
    }
  }
);

// =====================================
// PROTECTED ADMIN SUBSCRIBERS
// =====================================

app.get(
  '/api/admin/subscribers',
  authenticateAdmin,
  async (req, res) => {
    try {
      const subscribers = await Subscriber
        .find()
        .sort({ dateSubscribed: -1 });

      return res.status(200).json(subscribers);

    } catch (error) {
      console.error('Fetch subscribers error:', error);

      return res.status(500).json({
        error: 'Failed to fetch subscribers.'
      });
    }
  }
);

// =====================================
// PROTECTED ADMIN CONTACT MESSAGES
// =====================================

app.get(
  '/api/admin/messages',
  authenticateAdmin,
  async (req, res) => {
    try {
      const messages = await ContactMessage
        .find()
        .sort({ dateSubmitted: -1 });

      return res.status(200).json(messages);

    } catch (error) {
      console.error('Fetch contact messages error:', error);

      return res.status(500).json({
        error: 'Failed to fetch contact messages.'
      });
    }
  }
);

// =====================================
// START SERVER
// =====================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    'Server is running smoothly on port ' + PORT
  );
});

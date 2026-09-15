const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files (All files inside the 'public' folder are automatically accessible via URL)
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
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

// Subscriber Schema
const subscriberSchema = new mongoose.Schema({
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

// Subscribe Route
app.post('/api/subscribe', async (req, res) => {
  try {
    const email = req.body.email;

    if (!email || !email.includes('@')) {
      return res.status(400).json({
        error: 'A valid email address is required.'
      });
    }

    const existingSubscriber = await Subscriber.findOne({
      email: email
    });

    if (existingSubscriber) {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed! Here is your download.',
        downloadUrl: '/tfim-colouring-book-2.pdf' 
      });
    }

    const newSubscriber = new Subscriber({
      email: email
    });

    await newSubscriber.save();

    return res.status(201).json({
      success: true,
      message: 'Subscribed successfully! Your download is starting.',
      downloadUrl: '/tfim-colouring-book-2.pdf' 
    });

  } catch (error) {
    console.error('Subscription error:', error);

    return res.status(500).json({
      error: 'Server error. Please try again later.'
    });
  }
});

// Admin Subscribers Route
app.get('/api/admin/subscribers', async (req, res) => {
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
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running smoothly on port ' + PORT);
});
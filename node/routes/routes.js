const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Ngo = require('../models/ngo');
const router = express.Router();
const {User} = require('../models/user');
const multer = require('multer');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const cors = require("cors");


// Set up the 'uploads' directory
const uploadDir = path.join(__dirname, 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const fileName = `${Date.now()}_${Math.floor(Math.random() * 1000)}${ext}`;
    cb(null, fileName);
  },
});

// Create a multer instance with the storage configuration
const upload = multer({ storage: storage });

const cpUpload = upload.fields([
    { name: 'registrationDocument', maxCount: 1 },
]);




router.post('/registerUser', async (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;
    console.log( firstName, lastName, email, username, password)
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      role: 'User'
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/registerNgo', cpUpload, async (req, res) => {
  console.log(req.body);
  try {
    const {
      name,
      email,
      phone,
      username,
      password,
      confirmPassword,
      registrationDocument,
    } = req.body;

 
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Extract the uploaded logo file
    const logoFile = req.file;
    const logoPath = logoFile ? logoFile.path : null;

    // Create a new NGO
    const ngo = new Ngo({
      name,
      email,
      phone,
      username,
      password: hashedPassword,
      registrationDocument,
      logo: logoPath,
      role: 'Ngo',
    });

    // Save the NGO to the database
    await ngo.save();
    console.log({ message: 'NGO registered successfully' })
    res.status(201).json({ message: 'NGO registered successfully' });
  } catch (error) {
    console.log({'erro':error })
    res.status(500).json({ error: error.message });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    var user = await User.findOne({ username });
    var ngo;
    if (!user) {  
      user = await Ngo.findOne({ username });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    res.json({ id:user._id, token, role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
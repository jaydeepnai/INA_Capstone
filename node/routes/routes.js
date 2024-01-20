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
    const fileName = CusFileName(file);
    cb(null, fileName);
  },
});

// Create a multer instance with the storage configuration
const upload = multer({ storage: storage });

const cpUpload = upload.fields([
    { name: 'registrationDocument', maxCount: 1 },
    { name: 'NGOlogo', maxCount: 1 },
]);

const CusFileName = (file)=>{
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; 
    const year = today.getFullYear();
    const formattedToday = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    return `${formattedToday}_${file.originalname}`;
}


router.post('/registerUser', async (req, res) => {
  try {
    const {firstName,lastName, email,username,password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new NGO
    const user = new User({
      firstName,
      lastName,
      contacts:[{contactID:Date.now(),primaryEmailAddress:email}],
      username,
      password: hashedPassword,
      role: 'User',
    });

    // Save the NGO to the database
    const savedUser = await user.save();
    res.status(201).json({ message: 'NGO registered successfully',NGO:savedUser });

  } catch (error) {
    console.log({'erro':error })
    res.status(500).json({ error: error.message });
  }
});

router.post('/registerNgo', cpUpload, async (req, res) => {
  try {
    const {name, email,phone,username,password} = req.body;
    const {registrationDocument,NGOlogo} = req.files

    const RegistrationDocumentName = CusFileName(registrationDocument[0]) 
    const NGOlogoName =  CusFileName(NGOlogo[0])
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new NGO
    const ngo = new Ngo({
      name,
      contacts:[{id:Date.now(),contactNumber:phone,primaryEmailAddress:email}],
      username,
      password: hashedPassword,
      documents: [{id:Date.now(),Image:RegistrationDocumentName}],
      logoURL: {id:Date.now(),Image:NGOlogoName},
      role: 'Ngo',
    });

    // Save the NGO to the database
    const savedNGO = await ngo.save();
    res.status(201).json({ message: 'NGO registered successfully',NGO:savedNGO });

  } catch (error) {
    console.log({'erro':error })
    res.status(500).json({ error: error.message });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password)
    var ngo;
    var Entity,Role;
    
    // Find the user in the database
    var user = await User.findOne({ username });
    if (!user) {  
      ngo = await Ngo.findOne({ username });
      if (!ngo) { return res.status(401).json({ error: 'Invalid username or password' });}
      Entity = ngo;Role = "NGO"
    }else{
      Entity = user;Role = "USER"
    }
    console.log(Entity)

    const passwordMatch = await bcrypt.compare(password, Entity.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({ id: Entity._id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ id:Entity._id, token, role:Role });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
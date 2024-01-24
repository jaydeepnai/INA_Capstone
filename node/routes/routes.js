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
const { NgoService, NgoSchedule } = require('../models/ngoService');


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


router.put('/updateUser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    console.log(req.body)
    // Optional: Hash the password if it's being updated
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/updateUserLogo/:userId', upload.single('logo'), async (req, res) => {
  try {
    const { userId } = req.params;
    const {logo} = req.files

    if (!logo) {
      return res.status(400).json({ message: 'No logo file uploaded' });
    }
    const NGOlogoName =  CusFileName(logo[0])

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePicUrl: NGOlogoName },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User logo updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Update NGO endpoint
router.put('/updateNgo/:ngoId', async (req, res) => {
  try {
    const { ngoId } = req.params;
    const updateData = req.body;

    const updatedNgo = await Ngo.findByIdAndUpdate(ngoId, updateData, { new: true });

    if (!updatedNgo) {
      return res.status(404).json({ message: 'NGO not found' });
    }

    res.json({ message: 'NGO updated successfully', updatedNgo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Create NgoService
router.post('/ngoService', async (req, res) => {
  try {
    const ngoSchedule = new NgoSchedule(req.body.ngoSchedule);
    const ngoService = new NgoService(req.body.ngoService);
    ngoService._id 
    await ngoService.save();
    await ngoSchedule.save();
    res.status(201).json(ngoService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read NgoService (all)
router.get('/ngoServices', async (req, res) => {
  try {
    const ngoServices = await NgoService.find();
    res.json(ngoServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read NgoService (one)
router.get('/ngoService/:id', async (req, res) => {
  try {
    const ngoService = await NgoService.findById(req.params.id);
    if (!ngoService) {
      return res.status(404).json({ message: 'NGO Service not found' });
    }
    res.json(ngoService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update NgoService
router.put('/ngoService/:id', async (req, res) => {
  try {
    const updatedNgoService = await NgoService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedNgoService) {
      return res.status(404).json({ message: 'NGO Service not found' });
    }
    res.json(updatedNgoService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete NgoService
router.delete('/ngoService/:id', async (req, res) => {
  try {
    const ngoService = await NgoService.findByIdAndDelete(req.params.id);
    if (!ngoService) {
      return res.status(404).json({ message: 'NGO Service not found' });
    }
    res.json({ message: 'NGO Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
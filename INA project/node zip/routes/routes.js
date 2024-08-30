const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { registerUser, registerNgo, login } = require('../controllers/Auth');
const { updateUser, updateUserLogo, updateNgo } = require('../controllers/Profile');
const { DeleteNgoService, UpdateNgoService, FindNgoServiceByID, FindNgoServices, CreateNgoService } = require('../controllers/NGOService');
const { createPost, likePost, AddComment, getAllPost } = require('../controllers/Post');
const { getEvent } = require('../controllers/NGOEvents');
const { getNGOs } = require('../controllers/NGO');
const { CusFileName } = require('../lib/helper');
const { AddGrantApllication, UpdateGrantApllication, DelGrantApplication, GetAllGrantApplication } = require('../controllers/GrantApplication');
const { AddDonation, GetAllDonations } = require('../controllers/Donations');
const db = require("../db/db");
const mongoose = require('mongoose');
const { Contact, Address,User } = require('../models/user');
const Ngo = require('../models/ngo');


const uploadDir = path.join(__dirname, 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const fileName = CusFileName(file);
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

const cpUpload = upload.fields([
  { name: 'registrationDocument', maxCount: 1 },
  { name: 'NGOlogo', maxCount: 1 },
]);

const GAPUpload = upload.fields([
  { name: 'images', maxCount: 10 },
]);



//Registration
router.post('/registerUser',registerUser);
router.post('/registerNgo', cpUpload, registerNgo);
router.post('/login', login);

//Profile
router.put('/updateUser/:id', updateUser);
router.post('/updateUserLogo/:userId', upload.single('logo'), updateUserLogo);
router.put('/updateNgo/:ngoId', updateNgo);

// NgoService
router.post('/ngoService', CreateNgoService);
router.get('/ngoServices',FindNgoServices);
router.get('/ngoService/:id',FindNgoServiceByID);
router.put('/ngoService/:id', UpdateNgoService);
router.delete('/ngoService/:id', DeleteNgoService);

//NGO
router.get('/getNGOs', getNGOs);

//NGOEvent
router.get('/getEvents', getEvent);

//Posts
router.post('/createPost', upload.single('image'),createPost);
router.post('/likePost', likePost);
router.post('/AddComment', AddComment);
router.get('/getAllPost', getAllPost);

//Grant Applications
router.post('/AddGrantApplication',GAPUpload, AddGrantApllication);
router.post('/UpdateGrantApplication/:id', UpdateGrantApllication);
router.delete('/DeleteGrantApplication/:id', DelGrantApplication);
router.get('/GetAllGrantApplications/:userid', GetAllGrantApplication);

//Donations
router.post('/userDonations', AddDonation);
router.get('/userDonations/byUser/:userId', GetAllDonations);

router.get('/collections', async (req, res) => {
  try {
    // Use mongoose.connection.db to get raw access to the MongoDB driver's db object
    const rawDb = mongoose.connection.db;
    const collectionsCursor = await rawDb.listCollections().toArray();
    const collectionDetails = await Promise.all(collectionsCursor.map(async (collection) => {
      const count = await rawDb.collection(collection.name).countDocuments();
      return { name: collection.name, count };
    }));

    res.json(collectionDetails);
  } catch (error) {
    console.error("Error fetching collections", error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send(contacts);
  } catch (error) {
    res.status(500).send("An error occurred while fetching the contacts.");
  }
});

router.post('/contacts', async (req, res) => {
  const newContact = new Contact({
    contactNumber: req.body.contactNumber,
    primaryEmailAddress: req.body.primaryEmailAddress,
    nonPrimaryEmailAddress: req.body.nonPrimaryEmailAddress,
    socialMediaLinks: req.body.socialMediaLinks,
    createdAt: new Date(), // Set createdAt to current date
    updatedAt: new Date()  // Set updatedAt to current date
  });

  try {
    const savedContact = await newContact.save();
    res.status(201).send(savedContact);
  } catch (error) {
    res.status(400).send("Error creating the contact: " + error.message);
  }
});

router.put('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true } // Return the modified document rather than the original
    );

    if (!updatedContact) {
      return res.status(404).send('Contact not found.');
    }

    res.send(updatedContact);
  } catch (error) {
    res.status(400).send('Error updating contact: ' + error.message);
  }
});

router.delete('/contacts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).send('Contact not found.');
    }

    res.send(deletedContact);
  } catch (error) {
    res.status(500).send('Error deleting contact: ' + error.message);
  }
});


// Create Address
router.post('/addresses', async (req, res) => {
  try {
    const address = new Address({ ...req.body, createdAt: new Date(), updatedAt: new Date() });
    await address.save();
    res.status(201).send(address);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Read All Addresses
router.get('/addresses', async (req, res) => {
  try {
    const addresses = await Address.find({});
    res.send(addresses);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put('/addresses/:id', async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!address) {
      return res.status(404).send();
    }
    res.send(address);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete Address
router.delete('/addresses/:id', async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status(404).send();
    }
    res.send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/ngos', async (req, res) => {
  try {
    const ngos = await Ngo.find({ isDeleted: { $ne: true } })
      .populate('addressID', 'city street stateProvince country postalCode')
      .populate('contactID', 'primaryEmailAddress contactNumber socialMediaLinks')
      .select('name aim bannerImageURL logoURL reviews timing addressID contactID')
      .lean();

    const updatedNgos = ngos.map(ngo => {
      const ratings = ngo.reviews.map(review => review.rating);
      const averageRating = ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;
      
      // Construct URLs for the banner and logo images
      const bannerImageURL = ngo.bannerImageURL ? path.join('/uploads', ngo.bannerImageURL) : null;
      const logoURL = ngo.logoURL ? path.join('/uploads', ngo.logoURL) : null;
      console.log(ngo.addressID)
      console.log(ngo.contactID)
      return {
        ngoID: ngo._id,
        name: ngo.name,
        aim: ngo.aim,
        bannerImageURL,
        logoURL,
        rating: averageRating,
        timing: ngo.timing,
        // Include additional fields from the populated Address and Contact
        address: {
          city: ngo.addressID?.city,
          street: ngo.addressID?.street,
          stateProvince: ngo.addressID?.stateProvince,
          country: ngo.addressID?.country,
          postalCode: ngo.addressID?.postalCode,
        },
        contact: {
          primaryEmailAddress: ngo.contactID?.primaryEmailAddress,
          contactNumber: ngo.contactID?.contactNumber,
          socialMediaLinks: ngo.contactID?.socialMediaLinks,
        },
      };
    });

    res.json(updatedNgos);
  } catch (error) {
    console.error('Error fetching NGOs:', error);
    res.status(500).send('Internal Server Error');
  }
});




router.get('/users', async (req, res) => {
  try {
      const users = await User.find().populate('contactID').populate('addressID');
      res.json(users);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
  }
});





module.exports = router;

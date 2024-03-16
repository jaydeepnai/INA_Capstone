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



module.exports = router;
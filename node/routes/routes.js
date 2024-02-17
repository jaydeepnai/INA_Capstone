const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Ngo = require('../models/ngo');
const router = express.Router();
const { User, Contact, Address } = require('../models/user');
const multer = require('multer');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const cors = require("cors");
const { NgoService, NgoSchedule } = require('../models/ngoService');
const { Post, Comment } = require('../models/post')
// const Post = require('../models/post');


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

const CusFileName = (file) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  console.log("file", file);
  const formattedToday = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  return `${formattedToday}_${file.originalname}`;
}

const imageToBase64 = (imagePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        reject(err); // Handle file read errors
      } else {
        const base64Image = Buffer.from(data).toString('base64');
        const imgSrcString = `data:image/jpeg;base64,${base64Image}`;
        resolve(imgSrcString); // Return the Base64 string
      }
    });
  });
};





//Registration 
router.post('/registerUser', async (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const UserContact = new Contact({
      primaryEmailAddress: email
    })

    const savedUserContact = await UserContact.save();
    console.log(savedUserContact)

    // Create a new NGO
    const user = new User({
      firstName,
      lastName,
      contactID: savedUserContact._id,
      username,
      password: hashedPassword,
      role: 'User',
    });

    // // Save the NGO to the database
    const savedUser = await user.save();
    res.status(201)
      .json({ message: 'User registered successfully', User: savedUser });

  } catch (error) {
    console.log({ 'erro': error })
    res.status(500).json({ error: error.message });
  }
});

router.post('/registerNgo', cpUpload, async (req, res) => {
  try {
    const { name, email, phone, username, password } = req.body;
    const { registrationDocument, NGOlogo } = req.files

    const RegistrationDocumentName = CusFileName(registrationDocument[0])
    const NGOlogoName = CusFileName(NGOlogo[0])
    const hashedPassword = await bcrypt.hash(password, 10);


    const UserContact = new Contact({
      primaryEmailAddress: email
    })

    const savedUserContact = await UserContact.save();

    // Create a new NGO
    const ngo = new Ngo({
      name,
      contactID: savedUserContact._id,
      username,
      password: hashedPassword,
      documents: [{ id: Date.now(), Image: RegistrationDocumentName }],
      logoURL: NGOlogoName,
      role: 'Ngo',
    });

    // Save the NGO to the database
    const savedNGO = await ngo.save();
    res.status(201).json({ message: 'NGO registered successfully', NGO: savedNGO });

  } catch (error) {
    console.log({ 'erro': error })
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password)
    var ngo;
    var Entity, Role;

    // Find the user in the database
    var user = await User.findOne({ username });
    if (!user) {
      ngo = await Ngo.findOne({ username });
      if (!ngo) { return res.status(401).json({ error: 'Invalid username or password' }); }
      Entity = ngo; Role = "NGO"
    } else {
      Entity = user; Role = "USER"
    }
    console.log(Entity)

    const passwordMatch = await bcrypt.compare(password, Entity.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({ id: Entity._id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ id: Entity._id, token, role: Role });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
});



//Profile 
router.put('/updateUser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body.user;
    const contact = req.body.contact;
    const address = req.body.address;

    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    updatedContact = await Contact.findByIdAndUpdate(contact._id, contact, { new: true })

    if (!address._id) {
      const UserAddress = new Address(address)
      const CreatedAddress = await UserAddress.save()
      user.addressID = CreatedAddress._id;
    } else {
      updatedAddress = await Address.findByIdAndUpdate(address._id, address, { new: true })
    }

    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
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
    const { logo } = req.files

    if (!logo) {
      return res.status(400).json({ message: 'No logo file uploaded' });
    }
    const NGOlogoName = CusFileName(logo[0])

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

router.put('/updateNgo/:ngoId', async (req, res) => {
  try {
    const { ngoId } = req.params;
    const ngo = req.body.ngo;
    const contact = req.body.contact;
    const address = req.body.address;

    if (ngo.password) {
      ngo.password = await bcrypt.hash(ngo.password, 10);
    }

    updatedContact = await Contact.findByIdAndUpdate(contact._id, contact, { new: true })

    if (!address._id) {
      const UserAddress = new Address(address)
      const CreatedAddress = await UserAddress.save()
      user.addressID = CreatedAddress._id;
    } else {
      updatedAddress = await Address.findByIdAndUpdate(address._id, address, { new: true })
    }

    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    // const updateData = req.body;

    // const updatedNgo = await Ngo.findByIdAndUpdate(ngoId, updateData, { new: true });

    // if (!updatedNgo) {
    //   return res.status(404).json({ message: 'NGO not found' });
    // }

    res.json({ message: 'NGO updated successfully', updatedNgo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





// NgoService
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

router.get('/ngoServices', async (req, res) => {
  try {
    const ngoServices = await NgoService.find();
    res.json(ngoServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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




//Fetch Search Results
router.get('/getNGOs', async (req, res) => {
  try {
    const ngos = await Ngo.find({}) // Assuming you want to exclude deleted NGOs
      .populate('addressID', 'city') // Populate only the city field from the Address collection
      .select('name aim bannerImageURL logoURL reviews timing addressID')
      .lean(); // Use lean() to get plain JavaScript objects

    const updatedNgos = await Promise.all(ngos.map(async (ngo) => {
      const ratings = ngo.reviews.map(review => review.rating);
      const averageRating = ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : null;

      const bannerPath = path.join(__dirname, 'uploads', ngo.bannerImageURL);
      const logoPath = path.join(__dirname, 'uploads', ngo.logoURL);
      const bannerString = await imageToBase64(bannerPath);
      const logoString = await imageToBase64(logoPath);
      // console.log("ngo.addressID",ngo.addressID)
      return {
        ngoID: ngo._id,
        name: ngo.name,
        aim: ngo.aim,
        bannerImageURL: bannerString,
        logoURL: logoString,
        rating: averageRating,
        timing: ngo.timing,
        city: ngo.addressID?.city // Assuming addressID is populated with the city field
      };
    }));

    res.json(updatedNgos);
  } catch (error) {
    console.error('Error fetching NGOs:', error);
    res.status(500).send('Internal Server Error');
  }
});




//Posts 
router.post('/createPost', upload.single('image'), async (req, res) => {
  const { ngoID, NGOServiceID, content, image } = req.body;
  console.log(req.body, req.file)
  const PostImageName = CusFileName(req.file)
  var post = new Post({
    ngoID, NGOServiceID, content, image: PostImageName
  })
  await post.save();
  res.status(201).json({ message: 'Post Created successfully' });
});

router.post('/likePost', async (req, res) => {
  const { postID, userID, action } = req.body; // action can be 'inc' for increment or 'dcr' for decrement

  try {
    const post = await Post.findById(postID);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    const likeIndex = post.likes.findIndex(like => like.userId && like.userId.equals(userID));

    if (action === 'inc') {
      if (likeIndex === -1) {
        post.likes.push({ userId: userID, count: 1 });
      } else {
        post.likes[likeIndex].count += 1;
      }
    } else if (action === 'dcr') {
      if (likeIndex !== -1 && post.likes[likeIndex].count > 0) {
        post.likes[likeIndex].count -= 1;
        if (post.likes[likeIndex].count === 0) {
          post.likes.splice(likeIndex, 1);
        }
      }
    } else {
      return res.status(400).send('Invalid action');
    }

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.error("Error updating likes:", error);
    res.status(500).send('Error updating likes');
  }
});

router.post('/AddComment', async (req, res) => {
  const { postID, userID, ngoID, text, toreplyID } = req.body;

  try {
    // Create a new comment
    const comment = new Comment({
      postID,
      userID,
      ngoID,
      text,
      toreplyID, // Optional, include if the comment is a reply
    });

    // Save the comment to the database
    const savedComment = await comment.save();

    // Find the corresponding post and add the comment's ID to its comments array
    const post = await Post.findById(postID);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    post.comments.push(savedComment._id);
    await post.save();

    // Send back the saved comment
    res.status(201).json(savedComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).send('Error adding comment');
  }
});

router.get('/getAllPost', async (req, res) => {
  try {
    var posts = await Post.find({}).populate({
      path: 'comments', // Populate comments
      populate: {
        path: 'userID', // Then populate userID within each comment
        model: 'User' // Assuming 'User' is the name of your user model
      }
    });
    const updatedPosts = await Promise.all(posts.map(async (post) => {
      const imagePath = path.join(__dirname, 'uploads', post.image);
      try {
        const imgSrcString = await imageToBase64(imagePath);
        return {
          ...post.toObject(), // Convert Mongoose document to plain JavaScript object
          image: imgSrcString, // Update the image property with Base64 string
          comments: post.comments // Include the populated comments
        };
      } catch (error) {
        console.error(error);
        return { ...post.toObject(), image: null, comments: post.comments }; // Handle images that couldn't be converted
      }
    }));
    res.send(updatedPosts); // Send the updated posts array
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
const { imageToBase64 } = require("../lib/helper");
const Ngo = require("../models/ngo");
const path = require('path');

const getNGOs =  async (req, res) => {
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
  };

  

  module.exports = {
    getNGOs
  }
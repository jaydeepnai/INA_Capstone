const UserDonation = require("../models/donation");

const AddDonation = async (req, res) => {
    try {
        const newUserDonation = new UserDonation(req.body);
        const savedUserDonation = await newUserDonation.save();
        res.status(201).json(savedUserDonation);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
};

  
const GetAllDonations = async (req, res) => {
    try {
      const userDonations = await UserDonation.find({ userID: req.params.userId });
      res.json(userDonations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  



module.exports = {
    AddDonation,
    GetAllDonations
};

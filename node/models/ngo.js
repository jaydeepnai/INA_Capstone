const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  username: String,
  password: String,
  description: String,
  aim: String,
  foundingDate: Date,
  logoURL: {
    id: Number,
    Image: String,
  },
  bannerImageURL: {
    id: mongoose.Schema.Types.ObjectId,
    type: String,
    url: String,
    caption: String,
    createdAt: Date,
    updatedAt: Date,
  },
  ImageIDs: [Number],
  documents: [
    {
      id: Number,
      Image: String,
    },
  ],
  CategoryIDs: [Number],
  address: [
    {
      id: mongoose.Schema.Types.ObjectId,
      street: String,
      nearby: String,
      region: String,
      city: String,
      stateProvince: String,
      country: String,
      postalCode: Number,
      createdAt: Date,
      updatedAt: Date,
    },
  ],
  contacts: [
    {
      id: Number,
      contactNumber: String,
      primaryEmailAddress: String,
      nonPrimaryEmailAddress: String,
      socialMediaLinks: {
        facebook: String,
        twitter: String,
        website: String,
      },
      createdAt: Date,
      updatedAt: Date,
    },
  ],
  team: [
    {
      userID: Number,
      role: String,
    },
  ],
  createdAt: Date,
  updatedAt: Date,
  isDeleted: Boolean,
});

const Ngo = mongoose.model("Ngo", ngoSchema);

module.exports = Ngo;

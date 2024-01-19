const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  username: String,
  description: String,
  aim: String,
  foundingDate: Date,
  logoURL: {
    id: mongoose.Schema.Types.ObjectId,
    type: String,
    url: String,
    caption: String,
    createdAt: Date,
    updatedAt: Date,
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
      id: mongoose.Schema.Types.ObjectId,
      type: String,
      Image: Number,
      description: String,
      createdAt: Date,
      updatedAt: Date,
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
      id: mongoose.Schema.Types.ObjectId,
      contactNumber: Number,
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

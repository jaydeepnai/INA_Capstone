const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  description: String,
  aim: String,
  foundingDate: Date,
  logoURL: String,
  bannerImageURL: String,
  ImageIDs: [Number],
  documents: [
    {
      id: Number,
      Image: String,
    },
  ],
  CategoryIDs: [Number],
  addressID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  contactID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
  },
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

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
  timing:String,
  createdAt: Date,
  updatedAt: Date,
  isDeleted: Boolean,
  reviews: [
    {
      userID: {
        type: mongoose.Schema.Types.ObjectId, // Assuming users are stored in a User collection
        ref: "User",
      },
      text: String,
      rating: Number,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Ngo = mongoose.model("Ngo", ngoSchema);

module.exports = Ngo;

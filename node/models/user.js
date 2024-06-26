const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
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
});

const AddressSchema = new mongoose.Schema({
  street: String,
  nearby: String,
  region: String,
  city: String,
  stateProvince: String,
  country: String,
  postalCode: Number,
  createdAt: Date,
  updatedAt: Date,
});

const SkillSchema = new mongoose.Schema({
  name: String, // Name of the skill
  description: String,
  logoURL: String, // URL to the logo image
  bannerImageURL: String, // URL to the banner image
  createdAt: Date, // Date and time when the skill was created
  updatedAt: Date, // Date and time of the last update
});

const LanguageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  // Add any other fields relevant to your "Language" collection

  // Timestamps to track when the document was created and last updated
  createdAt: {
    type: Date,
    default: Date,
  },
  updatedAt: {
    type: Date,
    default: Date,
  },
});

// Define the main User schema
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  middlename: String,
  dateOfBirth: Date,
  gender: String,
  username: String,
  password: String,
  accountStatus: String,
  bio: String,
  additionalInfo: String,
  contactID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
  },
  addressID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  skillIDs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skill",
  }],
  languagesSpokenIDs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
  }],
  profilePicUrl: String,
  role: String,
  volunteerStatus: String,
  registeredAt: Date,
  isDeleted: Boolean,
});

// Create models for the related collections
const Contact = mongoose.model("Contact", ContactSchema);
const Address = mongoose.model("Address", AddressSchema);
const Skill = mongoose.model("Skill", SkillSchema);
const Language = mongoose.model("Language", LanguageSchema);

// Create the User model
const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
  Contact,
  Address,
  Skill,
  Language,
};

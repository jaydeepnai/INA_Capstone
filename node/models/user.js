const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  contactID: Number,
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
  addressID: Number,
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
  _id: Number,
  name: String, // Name of the skill
  description: String,
  logoURL: String, // URL to the logo image
  bannerImageURL: String, // URL to the banner image
  createdAt: Date, // Date and time when the skill was created
  updatedAt: Date, // Date and time of the last update
});

const LanguageSchema = new mongoose.Schema({
  _id: Number,
  name: Number,
  description: String,
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
  gender: { type: String, enum: ["Male", "Female"] },
  username: String,
  password: String,
  accountStatus: { type: String, enum: ["Active", "Inactive"] },
  bio: String,
  additionalInfo: String,
  contacts: [
    {
      contactID: Number,
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
  address: [
    {
      addressID: Number,
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
  skillIDs: [Number],
  languagesSpokenIDs: [Number],
  profilePicUrl: String,
  role: String,
  volunteerStatus: String,
  registeredAt: Date,
  isDeleted: Boolean,
});

// Create models for the related collections
const Skill = mongoose.model("Skill", SkillSchema);
const Language = mongoose.model("Language", LanguageSchema);

// Create the User model
const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
  Skill,
  Language,
};

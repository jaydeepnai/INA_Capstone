const mongoose = require('mongoose');
const grantApplicationSchema = new mongoose.Schema({
  userID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' // Adjust the reference to match your User model's name
  },
  shortTitle: {
    type: String,
    required: true
  },
  grantType: {
    type: String,
    required: true,
    enum: ['Health and Medical',"animal", 'Books', 'Disaster Relief', 'Money']
  },
  grantDescription: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Accepted', 'Rejected', 'Pending']
  },
  dueDate: {
    type: Date,
  },
  applicationDate: {
    type: Date,
    required: true
  },
  grantCompletionDate: {
    type: Date
  },
  donationIDs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userDonation' // Adjust the reference to match your userDonation model's name
  }],
  image: String,
  reviewerComments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GrantApplicationComments' // Adjust the reference to match your GrantApplicationComments model's name
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
  }
});

// Create the model from the schema
const GrantApplication = mongoose.model('GrantApplication', grantApplicationSchema);

module.exports = GrantApplication;

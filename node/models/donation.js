const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDonationSchema = new Schema({
  ngoID: { type: Schema.Types.ObjectId, ref: 'NGo' },
  userID: { type: Schema.Types.ObjectId, ref: 'User' },
  serviceID: { type: Schema.Types.ObjectId, ref: 'NGOService' },
  eventID: { type: Schema.Types.ObjectId, ref: 'NGOEvent' },
  grantApplicationID: { type: Schema.Types.ObjectId, ref: 'grantApplication' },
//   donationDetails: { type: Schema.Types.ObjectId, ref: 'DonationDetails' },
  receiptSent: { type: Boolean, default: false },
  emailReceipt: {
    sentDate: { type: Date },
    attachmentURL: { type: String }
  },
  billingAddress: {
    sentDate: { type: Date },
    UseracknowledgmentSent: { type: Boolean, default: false }
  },
  donorMessage: { type: String },
  NGOAcknowledgmentSent: { type: Boolean, default: false },
  beneficiaryAcknowlegment: { type: Boolean, default: false },
  Comments: [{ type: Schema.Types.ObjectId, ref: 'DonationsComments' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
});

const UserDonation = mongoose.model('UserDonation', userDonationSchema);

module.exports = UserDonation;

const mongoose = require("mongoose");


const scheduleSchema = new mongoose.Schema({
    startTime: Date,
    endTime: Date,
    volunteersNeeded: Number,
    notes: String,
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }],
}, { timestamps: true });

const userContactSchema = new mongoose.Schema({
    contactNumber: Number,
    primaryEmailAddress: String,
    nonPrimaryEmailAddress: String,
    socialMediaLinks: {
        facebook: String,
        twitter: String,
        website: String,
    },
}, { timestamps: true });

const donationsCommentsSchema = new mongoose.Schema({
    donationID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donation'
    },
    toreplyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DonationsComments'
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ngoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NGO'
    },
    text: String,
}, { timestamps: true });


const imageSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Image", "document"]
    },
    url: String,
    caption: String,
}, { timestamps: true });


const addressSchema = new mongoose.Schema({
    street: String,
    nearby: String,
    region: String,
    city: String,
    stateProvince: String,
    country: String,
    postalCode: Number,
}, { timestamps: true });

const feedbackTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["NGO Service", "NGO Event", "NGO", "Volunteer", "Resource Sharing", "Grant Application"]
    },
});

const ngoServiceFeedbackSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    NGOServiceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NGOService'
    },
    rating: Number,
    oneLineFeedback: String,
    description: String,
}, { timestamps: true });

const notificationSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type: String, // Assuming this refers to the type of notification, e.g., "Post"
    additionalData: mongoose.Schema.Types.Mixed, // For storing any additional data related to the notification
    status: {
        type: String,
        enum: ["Unread", "Read"]
    },
    message: String,
}, { timestamps: true });


const Schedule = mongoose.model('Schedule', scheduleSchema);
const UserContact = mongoose.model('UserContact', userContactSchema);
const DonationsComments = mongoose.model('DonationsComments', donationsCommentsSchema);
const Image = mongoose.model('Image', imageSchema);
const Address = mongoose.model('Address', addressSchema);
const FeedbackType = mongoose.model('FeedbackType', feedbackTypeSchema);
const NGOServiceFeedback = mongoose.model('NGOServiceFeedback', ngoServiceFeedbackSchema);
const Notification = mongoose.model('Notification', notificationSchema);


module.exports = {
    Schedule,
    UserContact,
    DonationsComments,
    Image,
    Address,
    FeedbackType,
    NGOServiceFeedback,
    Notification
};

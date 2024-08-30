const mongoose = require('mongoose');

const Schedule = new mongoose.Schema({
    "date": Date,
    "startTime": Date,
    "endTime": Date,
    "volunteersNeeded": Number,
    "notes": String,
    "address": {
        "street": String,
        "nearby": String,
        "region": String,
        "city": String,
        "stateProvince": String,
        "country": String,
        "postalCode": Number,
    }
})

const ngoServiceSchema = new mongoose.Schema({
    ngoID: mongoose.Schema.Types.ObjectId,
    serviceName: String,
    description: String,
    logoURL: String,
    bannerImageURL: String,
    serviceCategory: mongoose.Schema.Types.ObjectId,
    budget: Number,
    scheduleID: [Number],
    status: String,
    outcome: String,
    maxParticipants: Number,
    participantInterestedInvited: Number,
    feedback: [
        {
            "rating": Number,
            "comment": String
        }
    ],
    createdOn: Date,
    updatedOn: Date,
    Images: [String],
    additionalDetails: {
        contactPerson: String,
        contactEmail: String,
        contactPhone: String
    },
    otherRequirements: [String]
});


const ngoEventSchema = new mongoose.Schema({
    ngoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NGo',
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    description: String,
    budget: Number,
    maxParticipants: Number,
    participantInterestedInvited: Number, // Renamed to fit JavaScript naming conventions
    status: {
        type: String,
        enum: ['Yet to come', 'running', 'Complete'], // Note the typo correction from 'Complate' to 'Complete'
        default: 'Yet to come'
    },
    outcome: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    logoURL: String, // Assuming this is the event logo
    bannerImageURL: String,
    CategoryIDs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' // Assuming you have a Category model
    }],
    scheduleIDs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Schedule' // Assuming you have a Schedule model
    }],
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill' // Assuming you have a Skill model
    }],
    languagesSpoken: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language' // Assuming you have a Language model
    }],
    comments: [{ // Assuming this is an array of comment IDs, rename if it refers to a model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventComment' // Adjust based on your comment model's name
    }],
    ImageIDs: [{ // Assuming you have an Image model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    }],
    additionalDetails: {
        contactPerson: String,
        contactEmail: String,
        contactPhone: Number
    },
    otherRequirements: [String],
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // This will automatically add `createdAt` and `updatedAt` fields
});

// Pre-save hook to handle `updatedAt`
ngoEventSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const NgoEvent = mongoose.model('NgoEvent', ngoEventSchema);
const NgoService = mongoose.model('NgoService', ngoServiceSchema);
const NgoSchedule = mongoose.model('Schedule', Schedule);

module.exports = { NgoService, NgoSchedule,NgoEvent };

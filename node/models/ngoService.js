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
    Images: [
        {
            "type": String,
            "url": String,
            "caption": String,
            "createdAt": Date,
            "updatedAt": Date,
        }
    ],
    additionalDetails: {
        contactPerson: String,
        contactEmail: String,
        contactPhone: String
    },
    otherRequirements: [String]
});

const NgoService = mongoose.model('NgoService', ngoServiceSchema);
const NgoSchedule = mongoose.model('Schedule', Schedule);

module.exports = {NgoService,NgoSchedule};

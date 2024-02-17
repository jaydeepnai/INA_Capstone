const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    ngoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NGO', // Adjust 'NGO' to match your actual model name for NGOs
    },
    NGOServiceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NGOService', // Adjust to your model name for NGO services
    },
    content: {
        type: String,
        required: true
    },
    image: String,
    likes: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }, count: Number
        }
    ],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment', // Assuming 'Comment' is your model name for the comments collection
    }]
}, {
    timestamps: true // Automatically manages createdAt and updatedAt fields
});


const commentSchema = new Schema({
    toreplyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment', 
        required: false, // Set to true if it's always required, or keep as false if it's optional
    },
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post', // Adjust 'Post' to match your actual model name for posts
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Adjust 'User' to match your actual model name for users
        required: false,
    },
    ngoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NGO', // Adjust 'NGO' to match your actual model name for NGOs
        required: false,
    },
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now, // Automatically sets to the current date and time
    },
}, {
    timestamps: true, // Optionally, you can enable Mongoose's built-in timestamps for createdAt and updatedAt
});

// Create the model from the schema
const Comment = mongoose.model('Comment', commentSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = {Post,Comment};

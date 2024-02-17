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
}, {
    timestamps: true // Automatically manages createdAt and updatedAt fields
});

// Create the model from the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;

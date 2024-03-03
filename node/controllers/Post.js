const { CusFileName, imageToBase64 } = require("../lib/helper");
const { Post, Comment } = require("../models/post");
const path = require('path');


const createPost = async (req, res) => {
    const { ngoID, NGOServiceID, content, image } = req.body;
    const PostImageName = CusFileName(req.file)
    var post = new Post({
        ngoID, NGOServiceID, content, image: PostImageName
    })
    await post.save();
    res.status(201).json({ message: 'Post Created successfully' });
};

const likePost = async (req, res) => {
    const { postID, userID, action } = req.body; 

    try {
        const post = await Post.findById(postID);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        const likeIndex = post.likes.findIndex(like => like.userId && like.userId.equals(userID));
        if (action === 'inc') {
            if (likeIndex === -1) {
                post.likes.push({ userId: userID, count: 1 });
            } else {
                post.likes[likeIndex].count += 1;
            }
        } else if (action === 'dcr') {
            if (likeIndex !== -1 && post.likes[likeIndex].count > 0) {
                post.likes[likeIndex].count -= 1;
                if (post.likes[likeIndex].count === 0) {
                    post.likes.splice(likeIndex, 1);
                }
            }
        } else {
            return res.status(400).send('Invalid action');
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        console.error("Error updating likes:", error);
        res.status(500).send('Error updating likes');
    }
};

const AddComment = async (req, res) => {
    const { postID, userID, ngoID, text, toreplyID } = req.body;

    try {
        // Create a new comment
        const comment = new Comment({
            postID,
            userID,
            ngoID,
            text,
            toreplyID, // Optional, include if the comment is a reply
        });

        // Save the comment to the database
        const savedComment = await comment.save();

        // Find the corresponding post and add the comment's ID to its comments array
        const post = await Post.findById(postID);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        post.comments.push(savedComment._id);
        await post.save();

        // Send back the saved comment
        res.status(201).json(savedComment);
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).send('Error adding comment');
    }
};

const getAllPost = async (req, res) => {
    try {
        var posts = await Post.find({}).populate({
            path: 'comments', // Populate comments
            populate: {
                path: 'userID', // Then populate userID within each comment
                model: 'User' // Assuming 'User' is the name of your user model
            }
        });
        const updatedPosts = await Promise.all(posts.map(async (post) => {
            console.log(__dirname)
            const imagePath = path.join('C:/projects/INA_Capstone/node/routes', 'uploads', post.image);
            try {
                const imgSrcString = await imageToBase64(imagePath);
                return {
                    ...post.toObject(), // Convert Mongoose document to plain JavaScript object
                    image: imgSrcString, // Update the image property with Base64 string
                    comments: post.comments // Include the populated comments
                };
            } catch (error) {
                console.error(error);
                return { ...post.toObject(), image: null, comments: post.comments }; // Handle images that couldn't be converted
            }
        }));
        res.send(updatedPosts); // Send the updated posts array
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    createPost,
    likePost,
    AddComment,
    getAllPost
}

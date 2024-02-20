const { CusFileName } = require("../lib/helper");
const Ngo = require("../models/ngo");
const { Contact, User } = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const UserContact = new Contact({
            primaryEmailAddress: email
        })
        const savedUserContact = await UserContact.save();

        const user = new User({
            firstName,
            lastName,
            contactID: savedUserContact._id,
            username,
            password: hashedPassword,
            role: 'User',
        });
        const savedUser = await user.save();

        res.status(201)
            .json({ message: 'User registered successfully', User: savedUser });

    } catch (error) {
        console.log({ 'erro': error })
        res.status(500).json({ error: error.message });
    }
};

const registerNgo = async (req, res) => {
    try {
        const { name, email, phone, username, password } = req.body;
        const { registrationDocument, NGOlogo } = req.files
        const RegistrationDocumentName = CusFileName(registrationDocument[0])
        const NGOlogoName = CusFileName(NGOlogo[0])
        const hashedPassword = await bcrypt.hash(password, 10);

        const UserContact = new Contact({
            primaryEmailAddress: email
        })
        const savedUserContact = await UserContact.save();

        // Create a new NGO
        const ngo = new Ngo({
            name,
            contactID: savedUserContact._id,
            username,
            password: hashedPassword,
            documents: [{ id: Date.now(), Image: RegistrationDocumentName }],
            logoURL: NGOlogoName,
            role: 'Ngo',
        });

        // Save the NGO to the database
        const savedNGO = await ngo.save();
        res.status(201).json({ message: 'NGO registered successfully', NGO: savedNGO });

    } catch (error) {
        console.log({ 'erro': error })
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        var ngo;
        var Entity, Role;
        var user = await User.findOne({ username });
        if (!user) {
            ngo = await Ngo.findOne({ username });
            if (!ngo) { return res.status(401).json({ error: 'Invalid username or password' }); }
            Entity = ngo; Role = "NGO"
        } else {
            Entity = user; Role = "USER"
        }

        const passwordMatch = await bcrypt.compare(password, Entity.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const token = jwt.sign({ id: Entity._id }, 'your_secret_key', { expiresIn: '1h' });

        res.status(200).json({ id: Entity._id, token, role: Role });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    registerUser,
    registerNgo,
    login,
};

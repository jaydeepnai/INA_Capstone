const { CusFileName } = require("../lib/helper");
const Ngo = require("../models/ngo");
const { Contact, User } = require("../models/user");
const bcrypt = require('bcrypt');

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



module.exports = {
    registerNgo,
};

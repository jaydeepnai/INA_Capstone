const { Contact, Address, User } = require("../models/user");

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body.user;
        const contact = req.body.contact;
        const address = req.body.address;

        if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
        }

        updatedContact = await Contact.findByIdAndUpdate(contact._id, contact, { new: true })

        if (!address._id) {
            const UserAddress = new Address(address)
            const CreatedAddress = await UserAddress.save()
            user.addressID = CreatedAddress._id;
        } else {
            updatedAddress = await Address.findByIdAndUpdate(address._id, address, { new: true })
        }

        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUserLogo = async (req, res) => {
    try {
        const { userId } = req.params;
        const { logo } = req.files

        if (!logo) {
            return res.status(400).json({ message: 'No logo file uploaded' });
        }
        const NGOlogoName = CusFileName(logo[0])

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePicUrl: NGOlogoName },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User logo updated successfully', updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateNgo = async (req, res) => {
    try {
        const { ngoId } = req.params;
        const ngo = req.body.ngo;
        const contact = req.body.contact;
        const address = req.body.address;

        if (ngo.password) {
            ngo.password = await bcrypt.hash(ngo.password, 10);
        }

        updatedContact = await Contact.findByIdAndUpdate(contact._id, contact, { new: true })

        if (!address._id) {
            const UserAddress = new Address(address)
            const CreatedAddress = await UserAddress.save()
            user.addressID = CreatedAddress._id;
        } else {
            updatedAddress = await Address.findByIdAndUpdate(address._id, address, { new: true })
        }

        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'NGO updated successfully', updatedNgo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    updateUser,
    updateUserLogo,
    updateNgo,
};
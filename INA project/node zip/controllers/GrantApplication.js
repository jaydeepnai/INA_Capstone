const { CusFileName, imageToBase64 } = require("../lib/helper");
const GrantApplication = require("../models/grantApplication");
const path = require("path");

const AddGrantApllication = async (req, res) => {
    const { userID,
        shortTitle,
        grantType,
        grantDescription,
    } = req.body

    imgName = CusFileName(req.files.images[0])
    const today = new Date();
    const GAdueDate = new Date(today);
    GAdueDate.setDate(GAdueDate.getDate() + 7);

    var grantApl = new GrantApplication({
        userID,
        shortTitle,
        grantType,
        grantDescription,
        applicationDate: today,
        dueDate: GAdueDate,
        status: "Pending",
        image: imgName
    })

    await grantApl.save();
    res.status(200).json({ success: "successfullly Created" })

};


const UpdateGrantApllication = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedGrantApplication = await GrantApplication.findByIdAndUpdate(id, updates);

        if (!updatedGrantApplication) {
            return res.status(404).json({ error: "Grant application not found" });
        }
        res.status(200).json(updatedGrantApplication);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const DelGrantApplication = async (req, res) => {
    const { id } = req.params
    console.log("id",id)
    try {
        const grantApplication = await GrantApplication.findOneAndDelete(id);
        if (!grantApplication) {
            return res.status(404).json({ error: "Grant application not found" });
        }
        res.status(200).json({ message: "Grant application successfully deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const GetAllGrantApplication = async (req, res) => {
    const { userid } = req.params
    try {
        var grantApplication = await GrantApplication.find({userID:userid});

        grantApplication = await Promise.all(grantApplication.map(async (ga) => {
            const imagePath = path.join('C:/projects/INA_Capstone/node/routes', 'uploads', ga.image);
            try {
                const imgSrcString = await imageToBase64(imagePath);
                return {
                    ...ga.toObject(), // Convert Mongoose document to plain JavaScript object
                    image: imgSrcString, 
                };
            } catch (error) {
                console.error(error);
            }
        }));
        
        return res.status(200).json({ Grants: grantApplication });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    AddGrantApllication,
    UpdateGrantApllication,
    DelGrantApplication,
    GetAllGrantApplication
};

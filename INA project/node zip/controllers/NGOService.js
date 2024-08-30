const { NgoService, NgoSchedule } = require("../models/ngoService");

const CreateNgoService = async (req, res) => {
    try {
      const ngoSchedule = new NgoSchedule(req.body.ngoSchedule);
      const ngoService = new NgoService(req.body.ngoService);
      ngoService._id
      await ngoService.save();
      await ngoSchedule.save();
      res.status(201).json(ngoService);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
const FindNgoServices = async (req, res) => {
    try {
      const ngoServices = await NgoService.find();
      res.json(ngoServices);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
 const FindNgoServiceByID = async (req, res) => {
    try {
      const ngoService = await NgoService.findById(req.params.id);
      if (!ngoService) {
        return res.status(404).json({ message: 'NGO Service not found' });
      }
      res.json(ngoService);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
const UpdateNgoService = async (req, res) => {
    try {
      const updatedNgoService = await NgoService.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedNgoService) {
        return res.status(404).json({ message: 'NGO Service not found' });
      }
      res.json(updatedNgoService);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const DeleteNgoService = async (req, res) => {
    try {
      const ngoService = await NgoService.findByIdAndDelete(req.params.id);
      if (!ngoService) {
        return res.status(404).json({ message: 'NGO Service not found' });
      }
      res.json({ message: 'NGO Service deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  module.exports = {
    CreateNgoService,
    FindNgoServices,
    FindNgoServiceByID,
    UpdateNgoService,
    DeleteNgoService
};
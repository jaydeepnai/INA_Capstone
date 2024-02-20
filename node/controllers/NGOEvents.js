const { NgoEvent } = require("../models/ngoService");

const getEvent = async (req, res) => {
    try {
      const events = await NgoEvent.find({ isDeleted: false })
        .populate({
          path: 'ngoID',
          select: 'name logoURL' // Select only the NGO name and logo URL
        })
        .populate({
          path: 'scheduleIDs',
          select: 'startTime endTime address',
          populate: {
            path: 'address',
            select: 'city' // Assuming each address has a city field
          }
        })
        .lean();
  
      const eventData = events.map(event => ({
        eventName: event.eventName,
        eventBanner: event.bannerImageURL,
        ngoName: event.ngoID.name,
        ngoImage: event.ngoID.logoURL,
        schedule: event.scheduleIDs.map(schedule => ({
          startTime: schedule.startTime,
          endTime: schedule.endTime,
          location: schedule.address.map(address => address.city).join(', ') 
        }))
      }));
  
      res.json(eventData);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).send('Internal Server Error');
    }
  }

module.exports = {
    getEvent
}
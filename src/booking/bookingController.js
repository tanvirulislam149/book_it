const Booking = require("./bookingModel");
const Slot = require("../Slots/slotsModel");

const postBooking = async (req, res, next) => {
  try {
    const { person, slot } = req.body;
    const result = await Booking.create(req.body);
    if (result._id) {
      const bookedSlot = await Slot.findById(slot);
      bookedSlot.availableSeats -= person;
      await bookedSlot.save();
    }
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { postBooking };

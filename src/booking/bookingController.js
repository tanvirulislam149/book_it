const Booking = require("./bookingModel");
const Slot = require("../Slots/slotsModel");

const postBooking = async (req, res, next) => {
  try {
    const { person, slot } = req.body;
    const bookedSlot = await Slot.findById(slot);
    if (person > bookedSlot.availableSeats) {
      return res.status(400).json({
        success: false,
        message: `Booking failed. Only ${bookedSlot.availableSeats} seats available.`,
      });
    }
    const result = await Booking.create(req.body);
    if (result._id) {
      bookedSlot.availableSeats -= person;
      await bookedSlot.save();
    }
    res.status(201).json(result);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      });
    }

    // 🟡 Default fallback
    res.status(500).json({
      success: false,
      message: "Something went wrong while creating the booking.",
    });
  }
};

module.exports = { postBooking };

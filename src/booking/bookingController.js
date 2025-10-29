const Booking = require("./bookingModel");

const postBooking = async (req, res, next) => {
  try {
    console.log(req.body);
    res.json("asdf");
    // const result = await Booking.create()
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { postBooking };

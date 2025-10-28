const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  date: { type: Date, required: true, min: Date.now },
  availableSeats: { type: Number, required: true, default: 10, min: 0 },
  total_seats: { type: Number, required: true, min: 0 },

  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experience",
    required: true,
  },
});

const Slots = mongoose.model("Slot", slotSchema);

module.exports = Slots;

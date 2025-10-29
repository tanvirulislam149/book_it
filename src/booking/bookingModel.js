const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    validate: {
      validator: (v) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email.`,
    },
    required: [true, "Email is required"],
  },
  promo: { type: String },

  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Slot",
    required: true,
  },
});

const Slots = mongoose.model("Slot", slotSchema);

module.exports = Slots;

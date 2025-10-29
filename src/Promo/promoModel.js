const mongoose = require("mongoose");

const promoCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discountType: { type: String, enum: ["percentage", "fixed"], required: true },
  discountValue: { type: Number, required: true },
  isActive: { type: Boolean, default: false },
});

const Promo = mongoose.model("Promo", promoCodeSchema);
module.exports = Promo;

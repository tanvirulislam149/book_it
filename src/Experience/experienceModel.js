const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image_url: { type: String, required: true },
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;

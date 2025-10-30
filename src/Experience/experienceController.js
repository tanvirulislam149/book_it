const Slots = require("../Slots/slotsModel");
const Experience = require("./experienceModel");

const getAllExperience = async (req, res, next) => {
  try {
    const { title } = req.query;
    const experiences = await Experience.find({
      title: { $regex: title, $options: "i" },
    });
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getExperienceById = async (req, res, next) => {
  try {
    const experience = await Experience.findById(req.params.id);
    const slots = await Slots.find({ experience: experience._id }).populate(
      "experience"
    );
    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getAllExperience, getExperienceById };

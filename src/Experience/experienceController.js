const Experience = require("./experienceModel");

const getAllExperience = async (req, res, next) => {
  try {
    console.log("object");
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getExperienceById = async (req, res, next) => {
  try {
    const experiences = await Experience.findById(req.params.id);
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getAllExperience, getExperienceById };

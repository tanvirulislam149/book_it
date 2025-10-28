const Experience = require("./experienceModel");

const getAllExperience = async (req, res, next) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllExperience };

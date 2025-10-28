const Experience = require("./experienceModel");

const getAllExperience = async (req, res, next) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getAllExperience };

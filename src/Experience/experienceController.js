const Experience = require("./experienceModel");

const getAllExperience = async (req, res, next) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllExperience };

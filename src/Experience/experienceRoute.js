const express = require("express");
const {
  getAllExperience,
  getExperienceById,
} = require("./experienceController");

const experienceRouter = express.Router();

experienceRouter.get("/", getAllExperience);
experienceRouter.get("/:id", getExperienceById);

module.exports = experienceRouter;

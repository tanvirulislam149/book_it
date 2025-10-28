const express = require("express");
const {
  getAllExperience,
  getExperienceById,
} = require("./experienceController");

const experienceRouter = express.Router();

experienceRouter.get("/getAllExp", getAllExperience);
experienceRouter.get("/:id", getExperienceById);
// experienceRouter.post("/login", loginUser);

module.exports = experienceRouter;

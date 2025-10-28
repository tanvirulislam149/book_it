const express = require("express");
const { getAllExperience } = require("./experienceController");

const experienceRouter = express.Router();

experienceRouter.get("/getAllExp", getAllExperience);
// experienceRouter.post("/login", loginUser);

module.exports = experienceRouter;

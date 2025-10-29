const express = require("express");
const { postBooking } = require("./bookingController");

const bookingRouter = express.Router();

bookingRouter.post("/", postBooking);

module.exports = bookingRouter;

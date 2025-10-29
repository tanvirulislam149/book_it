const express = require("express");
const { postPromoValidate } = require("./promoController");

const promoRouter = express.Router();

promoRouter.post("/validate", postPromoValidate);

module.exports = promoRouter;

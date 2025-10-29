const express = require("express");
const app = express();
const experienceRouter = require("./Experience/experienceRoute");
const promoRouter = require("./Promo/promoRoute");

app.use(express.json());

// Routes
app.use("/api/experience", experienceRouter);
app.use("/api/promo", promoRouter);

app.get("/", (req, res) => {
  res.send("Hello World from bookit");
});

module.exports = app;

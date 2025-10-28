require("dotenv").config();

const config = {
  PORT: process.env.PORT || 5000,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
};

module.exports = config;

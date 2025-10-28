const mongoose = require("mongoose");
const config = require("./config");

async function db_connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@cluster0.5yaa9fl.mongodb.net/?appName=Cluster0`
    );
    console.log("db_connected");
  } catch (error) {
    console.log("db_connect_error ", error);
    process.exit(1);
  }
}

module.exports = db_connect;

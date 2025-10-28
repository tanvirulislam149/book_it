const app = require("./app");
const config = require("./config/config");
const db_connect = require("./config/db_connect");

const server = async () => {
  await db_connect();

  app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}`);
  });
};

server();

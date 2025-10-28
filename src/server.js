const app = require("./app");
const config = require("./config/config");

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`);
});

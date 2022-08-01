const { APP_PORT } = require("./config/config");
const app = require("./app/index");
//监听端口
app.listen(APP_PORT, () => {
  console.log("http://localhost:3000");
});

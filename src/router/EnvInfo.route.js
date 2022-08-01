const Router = require("koa-router");
const { request } = require("../app");

const { addEnvInfo, updateEnvInfo, getEnvInfo } = require("../controller/EnvInfo.controller");

const router = new Router({ prefix: "/env" });
//连接接口
router.post("/addEnv", addEnvInfo);
//修改数据接口
router.post("/updateEnv", updateEnvInfo);
//获取数据
router.post("/getdateEnv", getEnvInfo);

module.exports = router;

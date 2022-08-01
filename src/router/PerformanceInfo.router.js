const Router = require("koa-router");
const { request } = require("../app");

const router = new Router({ prefix: "/performance" });

router.post("/addPerformance");

const Koa = require("koa");
const koaBody = require("koa-body");

const app = new Koa();
//导入envRouter
const envRouter = require("../router/EnvInfo.route");

app.use(koaBody());
//挂在envrouter
app.use(envRouter.routes());

module.exports = app;

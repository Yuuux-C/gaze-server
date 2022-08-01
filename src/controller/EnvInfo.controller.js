const { addEnvInfo, updateEnvInfo, getEnvInfo } = require("../service/EnvInfo.service");
class EnvInfoController {
  async addEnvInfo(ctx, next) {
    const envInfo = ctx.request.body;
    // 错误处理
    //todo
    //操作数据库
    const res = await addEnvInfo(envInfo);
    //返回结果
    ctx.body = {
      code: 0,
      message: "成功",
    };
  }
  async updateEnvInfo(ctx, next) {
    const envInfo = ctx.request.body;
    const res = await updateEnvInfo(envInfo);
    ctx.body = {
      code: 0,
      message: "成功",
    };
  }
  async getEnvInfo(ctx, next) {
    const url = ctx.request.body.url;
    const res = await getEnvInfo(url);
    ctx.body = res;
  }
}

module.exports = new EnvInfoController();

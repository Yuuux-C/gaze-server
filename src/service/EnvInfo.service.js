const EnvInfo = require("../model/EnvInfo.model");

class EnvInfoService {
  //连接接口
  async addEnvInfo(envInfo) {
    const res = await EnvInfo.create({
      url: envInfo.url,
      os_type: envInfo.os.type,
      os_version: envInfo.os.version,
      browser_type: envInfo.browser.type,
      browser_version: envInfo.browser.version,
    });
    return res.dataValues;
  }
  //修改数据接口
  async updateEnvInfo(envInfo) {
    const res = await EnvInfo.update(
      {
        os_type: envInfo.os.type,
        os_version: envInfo.os.version,
        browser_type: envInfo.browser.type,
        browser_version: envInfo.browser.version,
      },
      { where: { url: envInfo.url } }
    );
  }
  // 获取数据接口
  async getEnvInfo(url) {
    const res = await EnvInfo.findAll({
      where: { url },
    });
    return res;
  }
}
module.exports = new EnvInfoService();

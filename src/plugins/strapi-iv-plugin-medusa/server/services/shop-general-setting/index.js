"use strict";

module.exports = {
  async getSettings() {
    return await strapi.query("plugin::strapi-iv-plugin-medusa.shop-general-setting").findOne();
  },

  async updateSettings(apiToken, url) {
    return await strapi.query("plugin::strapi-iv-plugin-medusa.shop-general-setting").update({
      data: {
        api_token_medusa_server: apiToken,
        url_medusa_server: url,
      },
    });
  },
};

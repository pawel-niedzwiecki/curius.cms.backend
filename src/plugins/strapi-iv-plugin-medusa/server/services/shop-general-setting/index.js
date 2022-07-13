"use strict";

module.exports = {
  async getSettings() {
    return await strapi.query("plugin::strapi-iv-plugin-medusa.shop-general-setting").findOne();
  },
};

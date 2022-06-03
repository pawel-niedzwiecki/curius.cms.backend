"use strict";

module.exports = {
  async getSettings() {
    const settings = await strapi.query("plugin::strapi-iv-plugin-medusa.shop-general-setting").findOne({
      populate: true,
    });

    return settings;
  },
};

"use strict";

module.exports = {
  async getSettings() {
    return await strapi.query("plugin::strapi-iv-plugin-medusa.shop-general-setting").findOne();
  },

  async updateSettings(apiToken, url) {
    const tryDoesExsist = await strapi.query("plugin::strapi-iv-plugin-medusa.shop-general-setting").findMany();

    if (!!tryDoesExsist.length)
      await strapi
        .query("plugin::strapi-iv-plugin-medusa.shop-general-setting")
        .delete({ where: { id: tryDoesExsist[0].id } });

    return await strapi.query("plugin::strapi-iv-plugin-medusa.shop-general-setting").create({
      data: {
        api_token_medusa_server: apiToken,
        url_medusa_server: url,
      },
    });
  },
};

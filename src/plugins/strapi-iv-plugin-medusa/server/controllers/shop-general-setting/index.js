"use strict";

module.exports = {
  async find(ctx) {
    ctx.body = await strapi.plugin("strapi-iv-plugin-medusa").service("shop-general-setting").getSettings();
  },

  async update(ctx) {
    const { apiToken, url } = ctx.request.body;

    ctx.body = await strapi
      .plugin("strapi-iv-plugin-medusa")
      .service("shop-general-setting")
      .updateSettings(apiToken, url);
  },
};

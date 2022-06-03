"use strict";

module.exports = {
  async find(ctx) {
    ctx.body = await strapi.plugin("strapi-iv-plugin-medusa").service("shop-general-setting").getSettings();
  },
};

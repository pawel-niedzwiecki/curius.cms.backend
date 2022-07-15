"use strict";

module.exports = {
  async syncAll(ctx) {
    ctx.body = await strapi.plugin("strapi-iv-plugin-medusa").service("shop-sync-data").syncAll();
  },
};

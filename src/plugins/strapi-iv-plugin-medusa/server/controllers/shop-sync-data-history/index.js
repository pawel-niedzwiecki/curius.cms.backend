"use strict";

module.exports = {
  async all(ctx) {
    ctx.body = await strapi.plugin("strapi-iv-plugin-medusa").service("shop-sync-data-history").all();
  },
};

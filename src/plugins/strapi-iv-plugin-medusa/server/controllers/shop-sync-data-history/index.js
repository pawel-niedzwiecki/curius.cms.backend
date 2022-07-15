"use strict";

module.exports = {
  async allHistory(ctx) {
    ctx.body = await strapi.plugin("strapi-iv-plugin-medusa").service("shop-sync-data-history").allHistory();
  },
};

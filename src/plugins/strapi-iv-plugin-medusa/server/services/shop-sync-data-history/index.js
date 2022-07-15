"use strict";

module.exports = {
  async allHistory() {
    const res = await strapi.query("plugin::strapi-iv-plugin-medusa.shop-sync-historry").findMany();
    return { data: res };
  },
};

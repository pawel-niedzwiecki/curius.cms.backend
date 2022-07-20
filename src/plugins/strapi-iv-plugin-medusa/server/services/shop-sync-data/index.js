"use strict";

module.exports = {
  async syncAll() {
    const syncNowWorking = await strapi
      .query("plugin::strapi-iv-plugin-medusa.shop-sync-historry")
      .findMany({ where: { status: "pending" } });

    if (!!syncNowWorking.length) return { status: "pending" };

    const createHistory = await strapi
      .query("plugin::strapi-iv-plugin-medusa.shop-sync-historry")
      .create({ data: { status: "pending", type: "all" } });

    return { ok: "pl" };
  },
};

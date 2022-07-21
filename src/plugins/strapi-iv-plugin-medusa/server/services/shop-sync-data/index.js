"use strict";

module.exports = {
  async syncAll() {
    const syncNowWorking = await strapi
      .query("plugin::strapi-iv-plugin-medusa.shop-sync-historry")
      .findMany({ where: { status: "pending" } });

    if (!syncNowWorking.length)
      await strapi
        .query("plugin::strapi-iv-plugin-medusa.shop-sync-historry")
        .create({ data: { status: "pending", type: "all" } });

    return { status: "pending" };
  },
};

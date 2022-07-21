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

    await strapi.plugin("strapi-iv-plugin-medusa").service("shop-sync-data").clearStatusSyncAll();

    return { status: "pending" };
  },

  async clearStatusSyncAll() {
    const statusSync = await strapi.query("plugin::strapi-iv-plugin-medusa.shop-sync-status").findMany();

    if (!!statusSync?.length)
      statusSync.forEach((item) =>
        (async () => await strapi.entityService.delete("plugin::strapi-iv-plugin-medusa.shop-sync-status", item.id))()
      );

    return { status: "resolve" };
  },
};

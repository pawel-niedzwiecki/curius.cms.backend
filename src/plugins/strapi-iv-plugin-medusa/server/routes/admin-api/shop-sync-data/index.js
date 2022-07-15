"use strict";

module.exports = [
  {
    method: "GET",
    path: "/shop-sync-data-history",
    handler: "/shop-sync-data-history.all",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
  {
    method: "GET",
    path: "/shop-sync-data-all",
    handler: "/shop-sync-data.syncAll",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
];

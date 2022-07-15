"use strict";

module.exports = [
  {
    method: "GET",
    path: "/shop-sync-data-all",
    handler: "/shop-sync-data.syncAll",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
];

"use strict";

module.exports = [
  {
    method: "GET",
    path: "/shop-sync-data-history",
    handler: "shop-sync-data-history.allHistory",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
];

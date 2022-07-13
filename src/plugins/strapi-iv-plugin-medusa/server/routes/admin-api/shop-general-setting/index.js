"use strict";

module.exports = [
  {
    method: "GET",
    path: "/shop-general-setting",
    handler: "shop-general-setting.find",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
  {
    method: "PUT",
    path: "/shop-general-setting",
    handler: "shop-general-setting.update",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
];

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
];

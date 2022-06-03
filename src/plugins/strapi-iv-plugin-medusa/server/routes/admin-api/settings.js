"use strict";

module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "shop-general-settings.find",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
  {
    method: "POST",
    path: "/",
    handler: "shop-general-settings.create",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
  {
    method: "PUT",
    path: "/",
    handler: "shop-general-settings.update",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
];

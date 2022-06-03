"use strict";

module.exports = [
  {
    method: "GET",
    path: "/setting",
    handler: "setting.find",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
];

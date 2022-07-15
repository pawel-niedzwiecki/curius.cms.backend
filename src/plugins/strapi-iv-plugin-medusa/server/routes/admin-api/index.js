"use strict";

const sync = require("./shop-sync-data");
const setting = require("./shop-general-setting");
const history = require("./shop-sync-data-history");

module.exports = {
  type: "admin",
  routes: [...setting, ...sync, ...history],
};

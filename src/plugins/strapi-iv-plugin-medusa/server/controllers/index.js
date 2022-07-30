"use strict";

const sync = require("./shop-sync-data");
const setting = require("./shop-general-setting");
const history = require("./shop-sync-data-history");

module.exports = {
  "shop-sync-data": sync,
  "shop-general-setting": setting,
  "shop-sync-data-history": history,
};

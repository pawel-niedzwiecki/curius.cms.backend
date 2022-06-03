"use strict";

const shopCollection = require("./shop-collection");
const shopCurrencie = require("./shop-currencie");
const shopGeneralSettings = require("./shop-general-setting");
const shopImage = require("./shop-image");
const shopProduct = require("./shop-product");
const shopProductOption = require("./shop-product-option");
const shopProductOptionVariant = require("./shop-product-option-variant");
const shopProductPriceVariant = require("./shop-product-price-variant");
const shopProductType = require("./shop-product-type");
const shopProductVariant = require("./shop-product-variant");
const shopTag = require("./shop-tag");

module.exports = {
  "shop-collection": shopCollection,
  "shop-currencie": shopCurrencie,
  "shop-general-setting": shopGeneralSettings,
  "shop-image": shopImage,
  "shop-product": shopProduct,
  "shop-product-option": shopProductOption,
  "shop-product-option-variant": shopProductOptionVariant,
  "shop-product-price-variant": shopProductPriceVariant,
  "shop-product-type": shopProductType,
  "shop-product-variant": shopProductVariant,
  "shop-tag": shopTag,
};

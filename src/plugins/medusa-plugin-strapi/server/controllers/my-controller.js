'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('medusa-plugin-strapi')
      .service('myService')
      .getWelcomeMessage();
  },
};

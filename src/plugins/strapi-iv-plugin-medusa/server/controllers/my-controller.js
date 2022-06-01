'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-iv-plugin-medusa')
      .service('myService')
      .getWelcomeMessage();
  },
};

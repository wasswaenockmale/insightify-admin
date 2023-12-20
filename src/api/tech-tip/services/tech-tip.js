'use strict';

/**
 * tech-tip service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tech-tip.tech-tip');

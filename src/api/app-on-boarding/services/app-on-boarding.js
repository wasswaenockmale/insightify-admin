'use strict';

/**
 * app-on-boarding service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-on-boarding.app-on-boarding');

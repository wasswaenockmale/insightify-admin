'use strict';

/**
 * sent-notification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sent-notification.sent-notification');

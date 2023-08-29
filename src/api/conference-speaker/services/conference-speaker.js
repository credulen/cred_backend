'use strict';

/**
 * conference-speaker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::conference-speaker.conference-speaker');

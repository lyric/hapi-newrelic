/*
 * hapi-newrelic
 * https://github.com/lyric/hapi-newrelic
 *
 * Copyright (c) 2014 Lyric Hartley
 * Licensed under the MIT license.
 */

'use strict';

// Following the 'Node.js require(s) best practices' by
// http://www.mircozeiss.com/node-js-require-s-best-practices/

// // Nodejs libs
// var fs = require('fs'),
//
// // External libs
// debug = require('debug'),
//
// // Internal libs
// data = require('./data.js');

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi!');
    }
  });

  next();
};

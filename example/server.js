/*
 * hapi-newrelic
 * https://github.com/lyric/hapi-newrelic
 *
 * Copyright (c) 2014 Lyric Hartley
 * Licensed under the MIT license.
 */

'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 8000);

server.pack.require('../', function() {
    server.start();
    console.log('Server running at ' + server.info.uri);
});

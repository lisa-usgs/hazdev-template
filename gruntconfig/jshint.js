'use strict';

var config = require('./config');

var jshint = {
  options: {
    jshintrc: '.jshintrc'
  },
  gruntfile: [
    'Gruntfile.js',
    'gruntconfig/**/*.js'
  ],
  scripts: [config.src + '/**/*.js'],
  tests: [config.test + '/**/*.js']
};

module.exports = jshint;

'use strict';
// Core modules dependencies
var Generator = require('yeoman-generator'),
    util = require('util'),
    path = require('path'),
    yosay = require('yosay');

module.exports = class extends Generator {
  promptUser: function() {
    var done = this.async();
    // Have Yeoman greet the user
    var prompts = [{
      name: 'appName',
      message: 'What is your app\s name?'
    },
    {
      type: 'confirm',
      name: 'addDemoSection',
      message: 'Would you like to generate a demo section?',
      default: true
    }];

    this.promp(prompts, function(props) {
      this.appName = props.appName;
      this.addDemoSection = props.addDemoSection;
      done();
    }).bind(this)
  }
};
'use strict';
// Core modules dependencies
let Generator = require('yeoman-generator');
let util = require('util');
let path = require('path');
let yosay = require('yosay');

module.exports = Generator.extend({
  promptUserDialog: function() {
    // Have Yeoman greet the user
    let self = this;
    this.log(yosay('Welcome to the coolest simpliest yeoman generator!'));

    return this.prompt({
        type: 'input',
        name: 'name',
        message: 'What is your app\s name?',
        default: this.appName,
    }).then(function(anwsers) {
        self.log('app name: ', anwsers.name);
    });
  },
  app: function() {
    this.fs.copy(
        this.templatePath('_app.js'),
        this.destinationPath('./app/scripts/app.js')
    );
  },
  bower: function() {
    this.fs.copy(
      this.templatePath('_bower.json'),
      this.destinationPath('./bower.json')
    );
  },
  package: function() {
    this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('./package.json')
    );
  },
  jshintrc: function() {
    this.fs.copy(
        this.templatePath('_.jshintrc'),
        this.destinationPath('./.jshintrc')
    );
  },
  editorconfig: function() {
    this.fs.copy(
        this.templatePath('_.editorconfig'),
        this.destinationPath('./.editorconfig')
    );
  },
  travis: function() {
    this.fs.copy(
        this.templatePath('_.travis.yml'),
        this.destinationPath('./.travis.yml')
    );
  },
  gruntfile: function() {
    this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('./Gruntfile.js')
    );
  },
  index: function() {
    let context = {
      site_name: this.appName,
    };

    this.fs.copy(
        this.templatePath('_index.html'),
        this.destinationPath('./app/index.js'),
        this.context
    );
  },
  end: function() {
    this.bowerInstall();
    this.npmInstall();
  },
});

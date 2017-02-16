'use strict';
// Core modules dependencies
var Generator = require('yeoman-generator'),
    util = require('util'),
    path = require('path'),
    yosay = require('yosay');

module.exports = Generator.extend({
  promptUserDialog: function() {
    // Have Yeoman greet the user
    var self = this;
    this.log(yosay('Welcome to the coolest simpliest yeoman generator!'));

    return this.prompt({
        type: 'input',
        name: 'name',
        message: 'What is your app\s name?',
        default: this.appName
    }).then(function(anwsers) {
        self.log('app name: ', anwsers.name);
    });
  },
  scaffoldFolders: function() {
    this.fs.copy(
        this.templatePath('_app.js'),
        this.destinationPath('./app/scripts/app.js')
    )
  },
  copyMainFiles: function() {
    this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('./bower.json')
    );
    this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('./package.json')
    );
    this.fs.copy(
        this.templatePath('_.editorconfig'),
        this.destinationPath('./.editorconfig')
    );
    this.fs.copy(
        this.templatePath('_.travis.yml'),
        this.destinationPath('./.travis.yml')
    );
    this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('./Gruntfile.js')
    );

    var context = {
      site_name: this.appName
    }

    this.fs.copy(
        this.templatePath('_index.html'),
        this.destinationPath('./app/index.html'),
        context
    );
  },
  end: function() {
    this.bowerInstall();
    this.npmInstall();
  }
});

'use strict';
// Core modules dependencies
var yeoman = require('yeoman-generator'),
    util = require('util'),
    path = require('path'),
    yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  promptUserDialog: function() {
    var done = this.async();

    this.log(yosay('Welcome to the coolest simpliest yeoman generator!'));

    // Have Yeoman greet the user
    var prompts = [{
      name: 'appName',
      message: 'What is your app\s name?'
    }];

    this.prompt(prompts, function(props) {
      this.appName = props.appName;
      done();
    }).bind(this)
  },
  scaffoldFolders: function() {
    this.mkdir("app");
    this.mkdir("app/css");
    this.mkdir("app/libs");
    this.mkdir("build");
  },
  copyMainFiles: function() {
    this.copy("_bower.json", "bower.json");
    // this.copy("_gruntfile.html", "Gruntfile.js");
    // this.copy("_package.json", "app/package.json");

    var context = {
      site_name: this.appName
    }

    this.template("_index.html", "app/index.html", context);
  },
  end: function() {
    this.bowerInstall();
  }
});

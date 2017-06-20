'use strict';
// Core modules dependencies
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class SimpleGenerator extends Generator {

  constructor(args, opts) {
    super(args, opts);

  }

  prompting() {
    this.log(yosay(
      'Welcome to the simpliest yeoman generator'
    ));

    const prompts = {
        type: 'input',
        name: 'name',
        message: 'What is your app\s name?',
        default: this.appName,
        store   : true
    }


    return this.prompt(prompts).then((anwsers) => {
      this.log('app name', anwsers.name);
    });

  };

  writing() {
    this.fs.copyTpl(
      this.templatePath('_index.html'),
      this.destinationPath('app/index.html'),
      { title: 'Bazinga' }
    );
  }

  // installDependencies() {
  //   this.npmInstall();
  //   this.bowerInstall();
  // }
};

/*module.exports = Generator.extend({
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
});*/

// Core modules dependencies
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const { mainFolder } = require('./generator-modules/file-paths');

module.exports = class SimpleGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    this.log(yosay(
      `Welcome to the ${chalk.green('simpliest')} yeoman generator ever!!!`));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your app name?',
        default: this.appName,
        store: true,
      },
      {
        type: 'input',
        name: 'type',
        message: 'This is foo type foo',
        default: 'foo',
      },
    ];


    return this.prompt(prompts).then(({ name, type }) => {
      this.log('app name', name);
      this.log('app type', type);
      this.config = {
        appName: name,
        type: type,
      };
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_index.html'),
      this.destinationPath(mainFolder + 'index.html'), {
        title: this.config.appName,
        type: this.config.type,
      }
    );
  }

  installDependencies() {
    this.npmInstall();
  }
};

/* module.exports = Generator.extend({
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

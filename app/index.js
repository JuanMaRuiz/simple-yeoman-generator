// Core modules dependencies
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const {
  mainFolder,
  testFolder,
  basicFiles,
  testFile,
} = require('./generator-modules/file-paths');

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
    ];


    return this.prompt(prompts).then(({ name, type }) => {
      this.config = {
        appName: name,
        type: type,
      };
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(mainFolder + '/package.json'), {
        title: this.config.appName,
      }
    );

    basicFiles.forEach( (file) => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(mainFolder + file)
      );
    });

    this.fs.copyTpl(
      this.templatePath(`${testFolder}/${testFile}`),
      this.destinationPath(`${testFolder}/${testFile}}`)
    );
  }

  installDependencies() {
    this.npmInstall();
  }
};

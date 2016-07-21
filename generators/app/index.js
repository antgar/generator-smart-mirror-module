'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the epic ' + chalk.red('Smart-Mirror module') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What\'s the name of the module?',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var destinationPath = this.props.moduleName + '.es6.js';
    this.fs.copyTpl(
      this.templatePath('module.es6.js'),
      this.destinationPath(destinationPath),
      { module: this.props.moduleName }
    );
  }

  // install: function () {
  //   this.installDependencies();
  // }
});

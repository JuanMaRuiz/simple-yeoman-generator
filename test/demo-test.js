const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-generator').test;
const _ = require('underscore');

describe('Webapp generator', function() {
  it('the generator can be required without throwing', function() {
    this.app = require('../app');
  });
});

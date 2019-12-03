const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

describe('Generator options', () => {
  it('should change name property of package.json with passed parameter', () => {
    return helpers.run(path.resolve(__dirname, './../app'))
      .withPrompts({ name: 'bazinga' })
      .then( () => {
        assert.fileContent('package.json', '"name": "bazinga"');
      });
  });
});

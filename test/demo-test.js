const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

describe('Webapp generator', () => {
  it('the generator can be required without throwing', () => {
    return helpers.run(path.resolve(__dirname, './../app'))
      .withPrompts({ name: 'bazinga' })
      .then( () => {
        assert.file('package.json');
      });
  });
});

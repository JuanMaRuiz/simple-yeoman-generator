const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');
const { basicFiles } = require('./../app/generator-modules/file-paths');

describe('Generated Files', () => {
    it('generates all files', () => {
      return helpers.run(path.resolve(__dirname, './../app'))
        .withPrompts({ name: 'bazinga' })
        .then(() => {
          basicFiles.forEach( (file) => {
            assert.file([
              file,
            ]);
          });
      });
    });
});

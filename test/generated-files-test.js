const assert = require('yeoman-assert');

describe('Generated Files', () => {
    it('generates all files', () => {
        assert.file([
          '.editorconfig',
          '.eslintrc.js',
          '.travis.yml']);
    });
});

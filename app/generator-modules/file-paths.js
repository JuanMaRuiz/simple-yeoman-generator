const mainFolder = './';
const testFolder = `${mainFolder}/test`;
const basicFiles = ['.editorconfig', '.eslintrc.js', '.travis.yml'];
const testFile = `${testFolder}/index.test.js`;

module.exports = {
  mainFolder,
  testFolder,
  basicFiles,
  testFile,
  appFolder: `${mainFolder}/app`,
};

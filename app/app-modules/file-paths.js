'use strict';

function resolvePath() {
  const filesPaths = {
    mainFolder: 'app/',
    destJsFiles: this.mainFolder + 'scripts',
  };

  return filesPaths;
};

module.exports = resolvePath;

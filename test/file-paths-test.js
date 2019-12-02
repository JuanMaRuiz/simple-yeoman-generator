const { expect } = require('chai');
const { mainFolder, destJsFiles } = require('./../app/generator-modules/file-paths');

describe('file-paths', () => {
    it('should return and object with main folder and destination Js files folder', () => {
        expect(mainFolder).to.eql('app/');
        expect(destJsFiles).to.eql('app/scripts');
    });
});

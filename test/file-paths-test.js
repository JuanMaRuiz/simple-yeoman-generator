const { expect } = require('chai');
const filePaths = require('./../app/generator-modules/file-paths');

describe('file-paths', () => {
    it('should return and object with main folder and destination Js files folder', () => {
        expect(filePaths.mainFolder).to.eql('app/');
        expect(filePaths.destJsFiles).to.eql('app/scripts');
    });
});

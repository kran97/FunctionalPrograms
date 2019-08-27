const assert = require('chai').assert;
const learYearVar = require('../leapYear');
var a = learYearVar.yearInput();

describe('yearInput', function(){
    it('Length of year should be equal to 4', function(){
        assert.equal(a.length, 4);
    });
    it('Year should be string', function(){
        assert.typeOf(a, 'string');
    })
});
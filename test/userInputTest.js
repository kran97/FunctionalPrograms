const assert = require('chai').assert;
const userInputVar = require('../userInput');
var a = userInputVar.input();

describe('input()', function(){
    it('function should return string', function(){
        assert.typeOf(a, 'string');
    });
    it('length of name should be >= 3', function(){
        assert.isAbove(a.length, 2);
    });
});
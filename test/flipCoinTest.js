const assert = require('chai').assert;
const flipCoinVar = require('../flipCoin');
var a = flipCoinVar.input();

describe('input', function(){
    it('It should return number type of n.', function()
    {
        assert.typeOf(a, 'number');
    });
    it('Value of n should be greater than 0.', function()
    {
        assert.isAbove(a, 0);
    });
});
var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('testBrickConstructor', function() {
    it('assert that size of brick has value of int', function() {
	var brick1 = new Brick(1,"test");
	var result = return brick1.size.valueof();
      assert.equal(result, int);
    });
    it('assert that color of brick has value of string', function() {
	var brick1 = new Brick(1,"test");
	var result = return brick1.size.valueof();
      assert.equal(console.log(brick.size), 62);
    });
});

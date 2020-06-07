var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('testBrickConstructor', function() {
    it('assert that size of brick is of type int', function() {
	var brick1 = new Brick(1,"test");
	var result = brick1.size;
      assert.equal(result, 'int');
    });
    it('assert that color of brick is of type string', function() {
	var brick1 = new Brick(1,"test");
	var result = brick1.color
      assert.typeOf(result, 'string');
    });
    it('assert that value of size of brick is 1', function() {
	var brick1 = new Brick(1, "test");
	var result = brick1.size;
      assert.equal(result, 1);
    });
    it('assert that value of color of brick is test', function() {
	var brick1 = new Brick(1, "test");
	var result = brick1.color
      assert.equal(result, "test");
    });
});

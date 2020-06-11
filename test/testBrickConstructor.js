var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('testBrickConstructor', function() {
describe('test typeof', function() {
    it('assert that size of brick is of type number', function() {
	var brick1 = new Brick(1,"test");
	var result = brick1.size;
      assert.equal(typeof result, 'number');
    });
    it('assert that color of brick is of type string', function() {
	var brick1 = new Brick(1,"test");
	var result = brick1.color
      assert.equal(typeof result, 'string');
    });
});
describe('test value', function() {
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
    it('assert that value of size of brick is 10', function() {
	var brick1 = new Brick(10, "red");
	var result = brick1.size;
      assert.equal(result, 10);
    });
    it('assert that value of color of brick is yellow', function() {
	var brick1 = new Brick(67, "yellow");
	var result = brick1.color
      assert.equal(result, "yellow");
    });
});
});

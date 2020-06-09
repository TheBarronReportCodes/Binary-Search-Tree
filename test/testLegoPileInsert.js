var assert = require('assert');
var lego = require('../legos');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile

describe('testLegoPileInsert', function() {
    it('', function() {
	var brick0 = new Brick(50, "red"); 
	var pile = new LegoPile();
	pile.add("red");
	pile.insert(brick0);
	console.log(pile.datastore);
      assert.equal(pile.find("red").root.data, brick0);
    });
});

var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');

describe( "Hero", function() {

     var hero = null;
     var honey = null;
     var steak = null;

     beforeEach(function(){
          hero = new Hero("Hercules", "steak");
          honey = new Food( "honey", 30 );
          steak = new Food( "steak", 50 );
     });

  it( "has name variable passed in constructor", function() {

    assert.equal( "Hercules", hero.name );
  });

  it("has health that starts at 100", function(){
     assert.equal(100, hero.health);
  });

  it( "has a favourite food passed in constructor", function() {
    assert.equal("steak", hero.favouriteFood );
  });

  it("can say their name", function(){
     assert.equal("Hi, my name is Hercules", hero.talk());
  });

  it("can eat food and increase health by food replenishmentValue", function(){
     hero.eat(honey);
     assert.equal(130, hero.health);
  });

  it("shouuld increase health by 1.5 * favourite food value when eaten", function() {
      hero.eat( steak );
      assert.equal( 175, hero.health );
  });
});

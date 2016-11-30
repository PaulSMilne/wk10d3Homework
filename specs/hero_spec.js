var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');

describe( "Hero", function() {

     var hero = null;
     var honey = null;
     var steak = null;
     var rat = null;

     beforeEach(function(){
          hero = new Hero("Hercules", "steak");
          honey = new Food( "honey", 30 );
          steak = new Food( "steak", 54 );
          rat = new Rat();
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

  it("should increase health by 1.5 * favourite food value when eaten", function() {
      hero.eat( steak );
      assert.equal( 181, hero.health );
  });

  it("should decrease health by replenishmentValue when eating food touched by rat", function() {
     rat.touch( honey );
     hero.eat( honey );
     assert.equal( 70, hero.health );
  });

  it("should decrease health only by replenishmentValue when eating favourite food poisoned by rat", function() {
     rat.touch( steak );
     hero.eat( steak );
     assert.equal( 46, hero.health );
  });

  it("hero identifies object as princess if wearing a crown", function() {
      var princess = { hat: "crown" };
     assert( true, hero.checkIfPrincess( princess ) ); 
  });

});

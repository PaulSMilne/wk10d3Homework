var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Princess = require('../princess');

describe( "Hero", function() {

     var hero = null;
     var honey = null;
     var steak = null;
     var rat = null;
     var princess = null;
     var notPrincess = null;

     beforeEach(function(){
          hero = new Hero("Hercules", "steak");
          honey = new Food( "honey", 30 );
          steak = new Food( "steak", 54 );
          rat = new Rat();
          princess = new Princess();
          notPrincess = { hat: "helmet", inPeril: true };
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

  it("identifies object as princess if wearing a crown", function() {
     assert.equal( true, hero.checkIfPrincess( princess ) );
  });

  it("identifies object as not princess if not wearing a crown", function() {
      var notPrincess = { hat: "helmet" };
     assert.equal( false, hero.checkIfPrincess( notPrincess ) );
  });

  it("saves candidate if wearing a crown", function(){
      hero.save( princess );
      assert.equal( false, princess.inPeril );
  });

  it("does not save candidate if not wearing crown", function(){
     hero.save(notPrincess);
     assert.equal(true,notPrincess.inPeril);
  })

});

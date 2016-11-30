var assert = require('assert');
var Hero = require('../hero');

describe( "Hero", function() {

     var hero = null;
     beforeEach(function(){
          hero = new Hero("Hercules", "steak");
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
});

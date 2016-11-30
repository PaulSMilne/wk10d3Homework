var assert = require('assert');
var Hero = require('../hero');

describe( "Hero", function() {

     var hero = null;
     beforeEach(function(){
          hero = new Hero("Hercules");
     })

  it( "has name variable", function() {

    assert.equal( "Hercules", hero.name );
  });

  it("has health that starts at 100", function(){
     assert.equal(100, hero.health);
  })
})

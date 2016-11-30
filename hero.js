var Hero = function( name, favouriteFood ){
     this.name = name;
     this.health = 100;
     this.favouriteFood = favouriteFood;
};

Hero.prototype = {
     talk: function(){
          return "Hi, my name is " + this.name;
     }
}

module.exports = Hero;

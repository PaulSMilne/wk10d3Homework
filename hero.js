var Hero = function( name, favouriteFood ){
     this.name = name;
     this.health = 100;
     this.favouriteFood = favouriteFood;
};

Hero.prototype = {
     talk: function(){
          return "Hi, my name is " + this.name;
     },
     eat: function( food ) {
         this.health += food.replenishmentValue;
     }
}

module.exports = Hero;

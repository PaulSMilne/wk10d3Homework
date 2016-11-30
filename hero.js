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
         var replenishmentFactor = 1;
         if (food.name === this.favouriteFood && food.replenishmentValue > 0){
          replenishmentFactor = 1.5;
         }
         this.health += food.replenishmentValue * replenishmentFactor;   
    }
}

module.exports = Hero;

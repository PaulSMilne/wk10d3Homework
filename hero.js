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
         console.log( "Hero: omm nom nom I'm eating", food.name );
         var replenishmentFactor = 1;

         if (food.name === this.favouriteFood && food.replenishmentValue > 0){
          replenishmentFactor = 1.5;

          if ( food.name === this.favouriteFood ) {
              console.log( "Hero: that is my favourite!" );
          }
         }

         if ( food.replenishmentValue < 0 ){
             console.log( "Hero: AAARRRRGHH!! I have been poisoned!" );
         }
         
         this.health += food.replenishmentValue * replenishmentFactor;
    },
    checkIfPrincess: function(candidate){
          if (candidate.hat === "crown"){
              console.log( "Hero: Yesss! I have found a princess!" );
               return true;
          }
          console.log( "Hero: You are no princess!" );
          return false;
    },
    save: function(candidate){
          var isPrincess = this.checkIfPrincess(candidate);
          if (isPrincess){
              console.log( "Hero: Don't worry missus, I will save you" );
               candidate.inPeril = false;
               candidate.reward(this);
          } else {
              console.log("Hero: I shall not save you, you are not worthy!" );
          }
    }
}

module.exports = Hero;

var Rat = function(){
};

Rat.prototype = {
     touch: function(food){

         console.log( "Rat: SQUEEEK, mmm", food.name );
         if ( food.replenishmentValue > 0 ) {

             food.replenishmentValue *= -1;
         }
     }
}

module.exports = Rat;

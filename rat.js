var Rat = function(){
};

Rat.prototype = {
     touch: function(food){
          food.isPoisonous = true;
     }
}

module.exports = Rat;
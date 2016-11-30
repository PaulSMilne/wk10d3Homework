var Princess = function() {

    this.inPeril = true;
    this.hat = "crown";
};

Princess.prototype = {
     reward: function(candidate){
         console.log( "Princess: Oh my hero....what took you so long", candidate.name, "!!!");
          candidate.health += 100;
     }
}

module.exports = Princess;

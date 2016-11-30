var Princess = function() {

    this.inPeril = true;
    this.hat = "crown";
};

Princess.prototype = {
     reward: function(candidate){
          candidate.health += 100;
     }
}

module.exports = Princess;

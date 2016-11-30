var Villain = function() {

    this.hat = "helmet";
};

Villain.prototype = {
     donDisguise: function(){
          this.hat = "crown";
     },
     reward: function(candidate){
          candidate.health -= 100;
     }
}

module.exports = Villain;

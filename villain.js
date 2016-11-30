var Villain = function() {

    this.hat = "helmet";
};

Villain.prototype = {
     donDisguise: function(){
          this.hat = "crown";
          console.log( "Villain: Haha, he will never recognise me" );
     },
     reward: function(candidate){
         console.log( "Villain: take this", candidate.name, "you goody two shoes!!!" );
          candidate.health -= 100;
     }
}

module.exports = Villain;

function Game(){
  this.runningScore = 0; 
};

Game.prototype.roll = function(){
  
};

Game.prototype.score = function() {
  return this.runningScore;
};

Game.prototype.playFrame = function(roll1, roll2) {
  this.runningScore = roll1 + roll2;
};

module.exports = Game;
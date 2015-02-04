var Frame = require('./frame');

function Game(){
  this.runningScore = 0; 
  this.firstFrame = undefined;
}

Game.prototype.roll = function(){
  
};

Game.prototype.score = function() {
  return this.runningScore;
};

Game.prototype.playFrame = function(roll1, roll2) {
  if(this.firstFrame === undefined) {
    this.firstFrame = new Frame();
  }
  this.firstFrame.playFrame(roll1, roll2);
  this.runningScore += this.firstFrame.score();
};

module.exports = Game;
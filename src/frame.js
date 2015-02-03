function Frame() {
  this.runningScore = 0;
}

Frame.prototype.score = function() {
  return this.runningScore;
};

Frame.prototype.playFrame = function(roll1, roll2) {
  this.runningScore = roll1 + roll2;
};

module.exports = Frame;
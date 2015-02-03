var Frame = require('../src/frame');
var Game = require('../src/game');

describe('Frame', function() {
  
  var frame;
  var game;

  beforeEach(function() {
    frame = new Frame();
    game = new Game();
  });
  

  it('Scores 0 on a gutter game', function() {
    for(var i = 0; i < 20; i++){
      game.roll(0);
    }
    expect(frame.score()).toEqual(0);
  });

  it('can play a frame', function() {
    frame.playFrame(3, 4);
    expect(frame.score()).toEqual(7);
  });

});
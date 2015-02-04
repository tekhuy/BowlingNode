var Game = require('../src/game');
var Frame = require('../src/frame');

describe('Game', function() {
  
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });
  

  it('Scores 0 on a gutter game', function() {
    for(var i = 0; i < 20; i++){
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can play a frame', function() {
    game.playFrame(3, 4);
    expect(game.score()).toEqual(7);
  });

  it('can play three frames', function() {
    game.playFrame(4, 5);
    game.playFrame(4, 5);
    game.playFrame(4, 5);
    expect(game.score()).toEqual(27);
  });

});
describe('homepage', function() {

  var host = 'http://localhost:9999/';

  before(function(){
    casper.start(host);
  });

  it('hello world', function() {
    casper.then(function() {
      expect("body").to.have.text("hello world")
    });
  });

  it('should greet people individually', function() {
    casper.thenOpen(host + '?name=huy', function() {
      expect('body').to.have.text('hello huy');
    });
  });

  it('should give me some JSON love', function() {
    casper.thenOpen(host + 'reflect.json?name=huy', function() {
      expect('body').to.have.text('{"name":"huy"}');
    });
  });

});
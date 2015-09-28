var you = require('love-modules');

describe ('love module', function() {
    // set of test
    it ('should return result word', function() {
        var result = you('love');
        result.should.equal('I Love You');
    });

});

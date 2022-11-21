// const assert = require('assert');
const assert = require('chai').assert;

// pull in whichever assert library you'd like to use


// pull in the main functions that will be tested
const objectOfFunctionsForThings = require('../hello-world');


// write the mocha describe() and it() function calls that will implement the test(s)

describe('say group of tests', () => {

  it('returns an appropriate salutation', () => {
    const returnValue = objectOfFunctionsForThings.sayHello('Tomogotchi');
    assert.equal(returnValue, 'Hello, Tomogotchi');
  });
  
  it('returns an appropriate farewell', () => {
    const returnValue = objectOfFunctionsForThings.sayGoodbye('Monkeyfuzz');
    assert.equal(returnValue, 'Goodbye, Monkeyfuzz');
  });

});


it('returns a quality see ya later aligator', () => {
  const returnValue = objectOfFunctionsForThings.syla('Monkeyfuzz');
  assert.equal(returnValue, 'See ya later, Monkeyfuzz, aligator');
});

import {expect} from 'chai';
import {factorial} from './factorial.js';

describe('Test Suite for factorial program', ()=>{
  it('Should return a factorial of a given number', (done) => {
    const input = 5;
    const expectedop = 120;
    const result = factorial(input);
    expect(result).to.be.equal(expectedop);
    done();
  });
});

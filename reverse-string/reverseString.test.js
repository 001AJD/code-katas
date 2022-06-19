import {expect} from 'chai';
import {reverseString} from './reverseString.js';

describe('Test Suite for reverseString function', ()=>{
  it('Should return reverse of a string', (done)=>{
    const result = reverseString('ABC');
    const expected = 'CBA';
    expect(result).to.be.equals(expected);
    done();
  });
  it('Should return invalid input if input not a string', (done)=>{
    const result = reverseString(123);
    const expected = 'invalid input';
    expect(result).to.be.equals(expected);
    done();
  });
});

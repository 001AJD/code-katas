import {expect} from 'chai';
import {isPalindrome} from './palindrome.js';

describe('Test suite for palindrome function', ()=>{
  it('Should return true if palindrome', (done)=> {
    const result = isPalindrome('AKA');
    const expectedOutput = true;
    expect(result).to.be.equals(expectedOutput);
    done();
  });
  it('Should return false i.e string is not a palindrome', (done)=> {
    const result = isPalindrome('Javascript');
    const expectedOutput = false;
    expect(result).to.be.equals(expectedOutput);
    done();
  });
});

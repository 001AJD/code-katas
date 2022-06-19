import {expect} from 'chai';
import {characterCount} from './characterCount.js';

describe('Test Suite for character count function', ()=>{
  it('Should return how many time a character appears in a string', (done)=>{
    const result = characterCount('programming');
    const expectedOutput =
      {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1};
    expect(JSON.stringify(result)).to.be.equals(JSON.stringify(expectedOutput));
    done();
  });
  it('Should return invalid input', (done)=>{
    const result = characterCount(12345);
    const expectedOutput = 'invalid input';
    expect(result).to.be.equals(expectedOutput);
    done();
  });
});

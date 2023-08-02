import { expect } from 'chai';
import { capitalizeString } from './capitalizeString.js';

describe('Test Suite for capitalizeString function', ()=>{
  it('Should return string with uppercase first letter of every word',(done)=>{
    const input = 'hello world';
    const expected = 'Hello World';
    const result = capitalizeString(input);
    expect(result).to.be.equals(expected);
    done();
  });

  it('Should return invalid input',(done)=>{
    const input = 12345;
    const expected = 'invalid input, expected string';
    const result = capitalizeString(input);
    expect(result).to.be.equals(expected);
    done();
  });

  it('Should return invalid input',(done)=>{
    const input = 'hello';
    const expected = 'Hello';
    const result = capitalizeString(input);
    expect(result).to.be.equals(expected);
    done();
  });
});
import {expect} from 'chai';
import {replaceChar} from './charMapper.js';

describe('Test Suite for replaceChar from Mapper function', ()=>{
  it('Should return valid output with aplhabets replaced with value', (done)=>{
    const input = 'A1:B45:C9';
    const mapper = {
      'A': 0,
      'B': 1,
      'C': 2,
    };
    const expected = '01:145:29';
    const result = replaceChar(input, mapper);
    expect(result).to.be.equals(expected);
    done();
  });

  it('Should return invalid input', (done)=>{
    const input = 12345;
    const mapper = {
      'A': 0,
      'B': 1,
      'C': 2,
    };
    const expected = 'invalid input, expected string';
    const result = replaceChar(input, mapper);
    expect(result).to.be.equals(expected);
    done();
  });
});

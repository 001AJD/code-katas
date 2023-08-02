import * as chai from 'chai';
import { expect } from 'chai';
import assertArrays from 'chai-arrays';
import { getUniqueElements } from './removeDuplicates.js'

chai.use(assertArrays);

describe('Test Suite for getUniqueElements function', ()=>{
  it('returns array with unique elements', (done)=>{
    const input = [1, 2, 3, 4, 3, 2, 1, 5];
    const expected = [1,2,3,4,5];
    const result = getUniqueElements(input);
    expect(result).to.be.equalTo(expected);
    done();
  });

  it('returns invalid input', (done)=>{
    const input = '1,2,3,4,5,5,6';
    const expected = 'invalid input, expected array';
    const result = getUniqueElements(input);
    expect(result).to.be.equals(expected);
    done();
  });
});
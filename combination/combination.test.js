import * as chai from 'chai';
import {expect} from 'chai';
import chaiArrays from 'chai-arrays';
import {arrayCombination, getCombinations} from './combination.js';

chai.use(chaiArrays);

describe('Test Suite for arrayCombination function', ()=>{
  it('should return the number of combinations possible in a 1D array', (done)=>{
    const input = [1, 2, 3, 4];
    const expectedOp = 16;// contains duplicate combination as well
    const result = arrayCombination(input);
    expect(result).to.be.equals(expectedOp);
    done();
  });
});

describe('Test Suite for getCombinations function', ()=>{
  it('should return the number of combinations possible in a 1D array', (done)=>{
    const input = [1, 2, 3];
    const expectedOp = [1, 2, 1, 3, 2, 3];
    const result = getCombinations(input);
    expect(result).to.be.equalTo(expectedOp);
    done();
  });
});

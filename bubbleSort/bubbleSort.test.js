import * as chai from 'chai';
import {expect} from 'chai';
import assertArrays from 'chai-arrays';
import {bubbleSort} from './bubbleSort.js';

chai.use(assertArrays);

describe('Test Suite for Bubble Sort function', ()=>{
  it('Should return a sorted array ascending order', (done)=>{
    const input = [100, 90, 80, 70, 60, 50];
    const expectedOp = [50, 60, 70, 80, 90, 100];
    const result = bubbleSort(input);
    expect(result).to.be.equalTo(expectedOp);
    done();
  });

  it('Should return a sorted array ascending order', (done)=>{
    const input = '[100, 90, 80, 70, 60, 50]';
    const expectedOp = 'invalid input';
    const result = bubbleSort(input);
    expect(result).to.be.equals(expectedOp);
    done();
  });
});

import * as chai from 'chai';
import chaiArrays from 'chai-arrays';
import {expect} from 'chai';
import {mergeSort} from './mergeSort.js';

chai.use(chaiArrays);

describe('Test Suite for merge sort algorithm', ()=>{
  it('returns the sorted array in ascending order', (done)=>{
    const input = [100, 800, 200, 50, 37, 35, 23];
    const expectedOp = [23, 35, 37, 50, 100, 200, 800];
    const result = mergeSort(input);
    expect(result).to.be.equalTo(expectedOp);
    done();
  });
});

import {expect} from 'chai';
import {binarySearch} from './binarySearch.js';

describe('Test Suite for binary search', ()=>{
  it('returns the index of search element', (done)=>{
    const input = [10, 20, 30, 40, 45, 47, 52, 73, 75, 80];
    const searchElement = 80;
    const expectedOp = 9;
    const result = binarySearch(input, searchElement);
    expect(expectedOp).to.be.equals(result);
    done();
  });

  it('returns the -1 search element is not found', (done)=>{
    const input = [10, 20, 30, 40, 45, 47, 52, 73, 75, 80];
    const searchElement = 99;
    const expectedOp = -1;
    const result = binarySearch(input, searchElement);
    expect(expectedOp).to.be.equals(result);
    done();
  });
});

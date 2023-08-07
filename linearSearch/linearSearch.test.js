import {expect} from 'chai';
import {linearSearch} from './linearSearch.js';

describe('Test Suite for linear Search function', ()=>{
  it('Returns index of the searchElement', (done)=>{
    const input = [10, 20, 5, 4, 3, 99, 11];
    const searchElement = 10;
    const expectedOp = 0;
    const result = linearSearch(input, searchElement);
    expect(result).to.be.equals(expectedOp);
    done();
  });
});

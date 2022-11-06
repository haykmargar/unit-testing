import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(()=> {
    validator = null;
  });

  it('should return true, if all elements are numbers', () => {
    const validationResults = validator.isAllNumbers([1, 33, 55, 6]);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw error when any element is string', () => {
    expect(() => {
      validator.isAllNumbers('77');
    }).to.throw('[77] is not an array');
  });
});

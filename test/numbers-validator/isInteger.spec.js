import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isInteger positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(()=> {
    validator = null;
  });

  it('should return true when provided with an integer number', () => {
    const validationResults = validator.isInteger(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error when provided a non-number', ()=> {
    expect(()=> {
      validator.isInteger('S');
    }).to.throw('[S] is not a number');
  });
});

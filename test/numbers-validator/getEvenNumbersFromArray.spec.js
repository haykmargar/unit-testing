import {expect} from 'chai';
import {NumbersValidator} from '../../app/numbers_validator.js';

describe('getEvenNumbersFromArray', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should should return an array of elements', () => {
    const arrayOfNumbers = [2, 4, 66, 7, 89];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([2, 4, 66]);
  });

  it('should throw an error if any element is not a number', () => {
    const arrayOfValues = [2, 4, 66, 7, '89'];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[2, 4, 66, 7, 89] is not an array of "Numbers"');
  });
});

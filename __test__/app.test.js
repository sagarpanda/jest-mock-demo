import utils from '../src/utils';
import * as sum from '../src/sum'
import app from '../src/app';

// automatically set all exports of module to the Mock Function (jest.fn)
// jest.mock('../src/substract');

const substract = require('../src/substract');
jest.mock('../src/substract', () => jest.fn());

describe('app', () => {
    test('app - utils', () => {
        utils.isAuthorized = jest.fn();
        app();

        expect(utils.isAuthorized).toHaveBeenCalled();
    });

    test('app return', () => {
        utils.isAuthorized = jest.fn((secret) => secret === 'abc');
        expect(app()).toEqual(true);
    });

    test('app - sum', () => {
        jest.spyOn(sum, 'default');
        app();
        expect(sum.default).toHaveBeenCalled();
        expect(sum.default).toHaveBeenCalledWith(1, 2);
    });

    test('app - substract', () => {
        app();
        expect(substract).toHaveBeenCalled();
        expect(substract).toHaveBeenCalledWith(2, 1);
    });
});

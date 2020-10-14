import utils from './utils';
import sum from './sum';

const substract = require('./substract');

const app = () => {
    sum(1, 2);
    substract(2, 1);
    return utils.isAuthorized("abc");
}

export default app;


// works fine without library usage
// console.log("Hello world!")

import {camelCase} from 'lodash';

// does not work as browser does not know where to find the function
console.log(camelCase("Hello world!"))
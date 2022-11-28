console.log('first');

const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise', 4444);
console.log('promise:', promise);

//
//          promise
//             |
//             |
//             |
//             V
//            / \
//           /   \
//   resolved    rejected
//
//


promise.then((data) => {
    console.log('data:', data);
  });


  


console.log('this is the end of the main thread');

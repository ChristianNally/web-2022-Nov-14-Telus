const fs = require('fs');

//
// Reading a file using code that leverages the Event Loop (i.e. it's asynchronous)
//

fs.readFile('./fileWithTextInItt.txt', 'utf8', (error, data) => {
  console.log('file read callback runs now.');
  if (error) {
    console.error('err', error);
    return;
  }
  console.log('data', data);
});

//
// An example using setTimeout
//

// function sleepFor(sleepDuration) {
//   const nowObject = new Date();
//   const now = nowObject.getTime();
//   while (new Date().getTime() < now + sleepDuration) {
//     /* do nothing */
//   }
// }

// setTimeout( () => {
//   console.log(`I was scheduled.`);
// }, 500 );

// sleepFor(3000);

//
//
//

console.log('This is the end of the main thread.');

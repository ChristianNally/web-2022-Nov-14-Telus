"use strict";

// const {promises: {readFile}} = require("fs");
const fs = require("fs");
const readFile = fs.promises.readFile;

readFile("./fileWithTextInIt.txt")
  .then(fileBuffer => {
    console.log('fileBuffer.toString()', fileBuffer.toString());
  })
  .catch(error => {
    console.error('error.message', error.message);
    process.exit(1);
  });

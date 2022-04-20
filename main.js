#!/usr/bin/env node
const ripGrep = require("./ripGrep");
const sentinelCommonImports = require("./sentinel-common-imports");
const fileOps = require("fileOps.js");
const placeholderFunctionDir = "/home/sean/sentinel-functions";
let functionsToImport = [];

//ripGrep("Potato").then((result) => console.log(result));

// Check each of the common imports to see if they exist in the customer's code
// and push them to functionsToImport
// ripGrep returns a promise containing the exit code of the ripgrep binary, which is 0 on successful match (1 for no match)

// https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
const main = async () => {
  for (const sentinelImport of sentinelCommonImports) {
    const exitCode = await ripGrep(sentinelImport);
    if (exitCode === 0) {
      console.log(`match found for ${sentinelImport}`);
      functionsToImport.push(sentinelImport);
    }
  }

  console.log(
    `The following functions are to be imported: ${functionsToImport}`
  );
};

main();

// Get functionsToImport, and for each set of functions copy them to the sentinel mocks directory

// Modify the sentinel.hcl file to reference the location of the copied common functions

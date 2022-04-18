#!/usr/bin/env node
const ripGrep = require("./ripGrep");
const sentinelCommonImports = require("./sentinel-common-imports");

let functionsToImport = [];

ripGrep("Potato").then((result) => console.log(result));

// Check each of the common imports to see if they exist in the customer's code
sentinelCommonImports.forEach((importName) => {
  ripGrep(importName).then((result) => {
    if (result === 0) {
      console.log("match found");
      functionsToImport.push(importName);
    }
  });
});
// if they exist, push them to functionsToImport

// Get functionsToImport, and for each set of functions copy them to the sentinel mocks directory

// Modify the sentinel.hcl file to reference the location of the copied common functions

#!/usr/bin/env node
const ripGrep = require("./ripGrep");
const sentinelCommonImports = require("./sentinel-common-imports");

ripGrep("Potato").then((result) => console.log(result));

#!/usr/bin/env node
const ripGrep = require("./ripGrep");

const searchForPhrase = async (phrase) => {
  const result = await ripGrep(phrase);
  return result;
};

const hasPotat = await searchForPhrase("potato");

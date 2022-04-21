const generateHereDoc = (funcName) => {
  return `mock "${funcName}" {
    module {
      source = "mock-${funcName}.sentinel"
    }
  }`;
};

module.exports = generateHereDoc;

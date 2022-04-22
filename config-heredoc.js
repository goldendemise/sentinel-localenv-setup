const generateHereDoc = (funcName) => {
  return `mock "${funcName}" {
    module {
      source = "${funcName}.sentinel"
    }
  }\n`;
};

module.exports = generateHereDoc;

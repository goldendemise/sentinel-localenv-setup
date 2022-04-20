const fs = require("fs");

const createSymlink = async (functionName, pathToFunction) => {
  //   console.log(`link being created is ${process.cwd()}/${functionName}`);
  //   console.log(`path to function is ${pathToFunction}`);
  fs.promises.symlink(pathToFunction, `${process.cwd()}/${functionName}`);
};

module.exports = createSymlink;

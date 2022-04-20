import fs from "fs";

const createSymlink = async (pathToFunction, functionName) => {
  fs.promises.symlink(__dirname + functionName, pathToFunction);
};

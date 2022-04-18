const { rgPath } = require("@vscode/ripgrep");
const { spawn } = require("child_process");
const { once } = require("events");

const ripGrep = async (phrase) => {
  try {
    const rg = spawn(rgPath, [phrase, process.cwd()]);
    let exitCode = null;
    rg.on("exit", (code) => {
      exitCode = code;
    });
    await once(rg, "close");
    return exitCode;
  } catch (err) {
    console.log(`Unexpected error spawning ripgrep search:\n${err}`);
  }

  //exit code for 'no match' should be 1
  //https://github.com/BurntSushi/ripgrep/issues/948
};

module.exports = ripGrep;

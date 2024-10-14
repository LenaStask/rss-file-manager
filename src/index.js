import EventEmitter from "node:events";
import { homedir } from "node:os";
import readline from "node:readline";
import { showCurrentDirectory } from "./helpers/showCurrentDirectory.js";
import { handleUp } from "./handlers/handleUp.js";
import { handleLine } from "./handlers/handleLine.js";
import { handleCd } from "./handlers/handleCD.js";
import { handleLs } from "./handlers/handleLs.js";
import { handleCat } from "./handlers/handleCat.js";
import { handleAdd } from "./handlers/handleAdd.js";
import { handleRn } from "./handlers/handleRn.js";
import { handleCp } from "./handlers/handleCp.js";
import { handleMv } from "./handlers/handleMv.js";
import { handleRm } from "./handlers/handleRm.js";

process.chdir(homedir());

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value] = arg.split("=");
    return [key, value];
  })
);

const username = args["--username"] ? args["--username"] : "User";

console.log(`Welcome to the File Manager, ${username}!`);

showCurrentDirectory();

const eventEmitter = new EventEmitter();

eventEmitter
  .on("up", handleUp)
  .on("cd", handleCd)
  .on("ls", handleLs)
  .on("cat", handleCat)
  .on("add", handleAdd)
  .on("rn", handleRn)
  .on("cp", handleCp)
  .on("mv", handleMv)
  .on("rm", handleRm);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", handleLine.bind(rl, eventEmitter));
rl.on("close", () =>
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
);

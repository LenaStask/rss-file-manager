import EventEmitter from "node:events";
import { homedir } from "node:os";
import { showCurrentDirectory } from "./helpers/showCurrentDirectory.js";
import { handleUp } from "./handlers/handleUp.js";

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

eventEmitter.on("up", handleUp);

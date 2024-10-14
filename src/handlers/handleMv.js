import { createReadStream, createWriteStream } from "node:fs";
import { parse, resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { showCurrentDirectory } from "../helpers/showCurrentDirectory.js";

const handleMv = async ([path_to_file, path_to_new_directory]) => {
  try {
    const pathToFile = resolve(path_to_file);
    const { base } = parse(pathToFile);
    pathToNewDirectory = resolve(path_to_new_directory, base);
    const rs = createReadStream(pathToFile);
    const ws = createWriteStream(pathToNewDirectory);
    await pipeline(rs, ws);
    await unlink(pathToFile);
    showCurrentDirectory();
  } catch (error) {
    console.error("Operation failed");
  }
};

export { handleMv };

import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { showCurrentDirectory } from "../helpers/showCurrentDirectory.js";

const handleCat = async ([path_to_file]) => {
  try {
    const rs = createReadStream(resolve(path_to_file), { encoding: "utf8" });
    await pipeline(rs, process.stdout);
    showCurrentDirectory();
  } catch (error) {
    console.error("Operation failed");
  }
};

export { handleCat };

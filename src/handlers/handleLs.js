import { readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { showCurrentDirectory } from "../helpers/showCurrentDirectory.js";

const handleLs = async () => {
  try {
    const files = await readdir(resolve(process.cwd()));
    console.table(files);
    showCurrentDirectory();
  } catch (error) {
    console.error("Operation failed");
  }
};

export { handleLs };

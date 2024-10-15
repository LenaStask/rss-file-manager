import { unlink } from "node:fs/promises";
import { resolve } from "node:path";
import { showCurrentDirectory } from "../helpers/showCurrentDirectory.js";

const handleRm = async ([path_to_file]) => {
  try {
    await unlink(resolve(path_to_file));
    showCurrentDirectory();
  } catch (error) {
    console.error("Operation failed");
  }
};

export { handleRm };

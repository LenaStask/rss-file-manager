import { rename } from "node:fs/promises";
import { resolve, parse } from "node:path";
import { showCurrentDirectory } from "../helpers/showCurrentDirectory.js";

const handleRn = async ([path_to_file, new_filename]) => {
  try {
    const pathToFile = resolve(path_to_file);
    const { dir } = parse(pathToFile);
    const pathFromFile = resolve(dir, new_filename);
    await rename(pathToFile, pathFromFile);
    showCurrentDirectory();
  } catch (error) {
    console.error("Operation failed");
  }
};

export { handleRn };

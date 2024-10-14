import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { showCurrentDirectory } from "../helpers/showCurrentDirectory.js";

const handleAdd = async ([new_file_name]) => {
  try {
    const pathToFile = resolve(process.cwd(), new_file_name);
    await writeFile(pathToFile, "");
    showCurrentDirectory();
  } catch (error) {
    console.error("Operation failed");
  }
};

export { handleAdd };

import { showCurrentDirectory } from "../helpers/showCurrentDirectory.js";

const handleCd = async ([path_to_directory]) => {
  try {
    process.chdir(path_to_directory);
    showCurrentDirectory();
  } catch (error) {
    console.error("Operation failed");
  }
};

export { handleCd };

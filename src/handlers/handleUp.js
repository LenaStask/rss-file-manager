import { showCurrentDirectory } from "../helpers/showCurrentDirectory.js";

const handleUp = () => {
  try {
    process.chdir("..");
    showCurrentDirectory();
  } catch (error) {
    console.error("Operation failed");
  }
};

export { handleUp };

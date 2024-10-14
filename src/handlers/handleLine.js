const handleLine = (eventEmitter, line) => {
  try {
    line = line.trim();
    let [command, ...args] = line.split(" ");
    switch (command) {
      case "up":
        eventEmitter.emit("up");
        break;
      case "cd":
        eventEmitter.emit(command, args);
        break;
      case "ls":
        eventEmitter.emit("ls");
        break;
      default:
        throw new Error("Invalid input");
    }
  } catch (error) {
    console.error(error.message);
  }
};

export { handleLine };

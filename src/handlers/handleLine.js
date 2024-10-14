function handleLine(eventEmitter, line) {
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
      case "cat":
        eventEmitter.emit("cat", args);
        break;
      case "add":
        eventEmitter.emit("add", args);
        break;
      case "rn":
        eventEmitter.emit("rn", args);
        break;
      case "cp":
        eventEmitter.emit("cp", args);
        break;
      case "mv":
        eventEmitter.emit("mv", args);
        break;
      case "rm":
        eventEmitter.emit("rm", args);
        break;
      case ".exit":
        this.close();
        break;
      default:
        throw new Error("Invalid input");
    }
  } catch (error) {
    console.error(error.message);
  }
}

export { handleLine };

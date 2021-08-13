
export {}

export const readAllTasks = () => {
     const allTasks = fs.readFileSync("./task.json");
     return JSON.parse(allTasks);
 }
const fs = require('node:fs');
const path = require('node:path');

const todoPath = path.join(__dirname, 'todo.txt');

try {
  const contents = fs.existsSync(todoPath) ? fs.readFileSync(todoPath, 'utf8') : '';
  const tasks = contents.split(/\r?\n/).filter((task) => task.trim());

  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
  }
} catch (error) {
  console.error('Could not read the task list:', error.message);
  process.exitCode = 1;
}

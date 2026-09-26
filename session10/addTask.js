const fs = require('node:fs');
const path = require('node:path');

const todoPath = path.join(__dirname, 'todo.txt');
const task = process.argv.slice(2).join(' ').trim();

if (!task || /[\r\n]/.test(task)) {
  console.error('Usage: node addTask.js <task description>');
  process.exitCode = 1;
} else {
  try {
    const contents = fs.existsSync(todoPath) ? fs.readFileSync(todoPath, 'utf8') : '';
    const tasks = contents.split(/\r?\n/).filter((item) => item.trim());
    const alreadyAdded = tasks.find(
      (item) => item.trim().toLowerCase() === task.toLowerCase()
    );

    if (alreadyAdded) {
      console.log('Task already exists');
    } else {
      tasks.push(task);
      fs.writeFileSync(todoPath, tasks.join('\n') + '\n');
      console.log('Task added successfully');
    }
  } catch (error) {
    console.error('Could not update the task list:', error.message);
    process.exitCode = 1;
  }
}

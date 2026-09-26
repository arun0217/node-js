const fs = require('node:fs');
const path = require('node:path');

const todoPath = path.join(__dirname, 'todo.txt');
const taskNumber = Number(process.argv[2]);

if (!Number.isInteger(taskNumber) || taskNumber < 1) {
  console.error('Usage: node removeTask.js <task number>');
  process.exitCode = 1;
} else {
  try {
    const contents = fs.existsSync(todoPath) ? fs.readFileSync(todoPath, 'utf8') : '';
    const tasks = contents.split(/\r?\n/).filter((task) => task.trim());

    if (taskNumber > tasks.length) {
      console.error(`There is no task numbered ${taskNumber}.`);
      process.exitCode = 1;
    } else {
      tasks.splice(taskNumber - 1, 1);
      fs.writeFileSync(todoPath, tasks.length > 0 ? `${tasks.join('\n')}\n` : '');
      console.log('Updated task list:');

      if (tasks.length === 0) {
        console.log('No tasks found.');
      } else {
        tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
      }
    }
  } catch (error) {
    console.error('Could not update the task list:', error.message);
    process.exitCode = 1;
  }
}

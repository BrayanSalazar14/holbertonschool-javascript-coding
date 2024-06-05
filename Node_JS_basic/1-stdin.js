console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (name) => {
  const trimmedName = name.toString().trim();
  console.log(`Your name is: ${trimmedName}`);
  console.log('This important software is now closing');
  process.exit();
});

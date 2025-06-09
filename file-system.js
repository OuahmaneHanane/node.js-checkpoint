const fs = require('fs');

// Step 1: Create welcome.txt with "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node', 'utf8');

// Step 2: Read data from hello.txt and print it
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading hello.txt:', err.message);
    return;
  }
  console.log('Contents of hello.txt:', data);
});
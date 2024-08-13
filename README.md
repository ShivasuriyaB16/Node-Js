
Day 1: Initial Setup and Basic Node.js Example
 Repository Structure
```
nodejs-day1/
├── index.js
└── README.md
```

`README.md`
```markdown


## Overview
This repository contains the progress for Day 1 of learning Node.js. It includes the initial setup and a basic example of a Node.js application.

## Goals for Day 1
- Install Node.js
- Create a simple Node.js application
- Understand basic Node.js concepts

## Files
- `index.js`: A basic Node.js script that demonstrates a simple HTTP server.

## How to Run
1. Make sure Node.js is installed on your machine.
2. Clone this repository.
3. Navigate to the repository directory in your terminal.
4. Run `node index.js`.
5. Open your browser and visit `http://localhost:3000` to see the output.

## Next Steps
- Explore Node.js modules and more complex functionality.
```

#### `index.js`
```javascript
// Import the built-in http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server that responds with "Hello World!"
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code 200 OK
  res.setHeader('Content-Type', 'text/plain'); // Set response header
  res.end('Hello World!\n'); // Send response body
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

### Instructions
1. **Clone the Repository:** `git clone <repository-url>`
2. **Navigate to the Directory:** `cd nodejs-day1`
3. **Install Node.js (if not already installed):** Download and install from [Node.js official website](https://nodejs.org/).
4. **Run the Application:** `node index.js`
5. **Visit the URL:** Open `http://localhost:3000` in your browser to see "Hello World!".

This setup gives a clear view of your initial progress and provides a foundational example of a Node.js application.

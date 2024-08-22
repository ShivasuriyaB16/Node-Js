const axios = require('axios');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

// MySQL connection setup
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Replace with your MySQL username
  password: '',        // Replace with your MySQL password
  database: 'example_db'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

// Fetch data from external API and store in MySQL
async function fetchDataAndStore() {
  try {
    const response = await axios.get('https://api.example.com/data'); // Replace with a real API URL
    const data = response.data;

    // Assuming the data is an array of objects
    data.forEach(item => {
      connection.query('INSERT INTO data (name, info) VALUES (?, ?)', [item.name, item.info], (err, results) => {
        if (err) throw err;
        console.log('Data inserted:', results.insertId);
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Endpoint to retrieve data from MySQL
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM data', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching data from database');
      return;
    }
    res.json(results);
  });
});

// Start the application
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  // Fetch data and store in MySQL when the server starts
  fetchDataAndStore();
});

const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

// Enable CORS
app.use(cors());

app.get('/api/clinics', (req, res) => {
    fs.readFile('clinics.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error reading JSON file');
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
          res.send(data);
        }
      });
});

app.get('/api/appointments', (req, res) => {
    fs.readFile('appointments.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error reading JSON file');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(data);
      }
    });
  });

  app.get('/api/doctors', (req, res) => {
    fs.readFile('doctors.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error reading JSON file');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(data);
      }
    });
  });

  app.get('/api/patients', (req, res) => {
    fs.readFile('patients.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error reading JSON file');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(data);
      }
    });
  });

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

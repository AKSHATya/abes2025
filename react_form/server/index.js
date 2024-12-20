const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error processing request' });
  }
});

app.get('/employees', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching employees' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

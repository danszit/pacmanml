// server.js

// server.js
const express = require('express');
const app = express();
app.use(express.json()); // For parsing JSON request bodies
const PORT = process.env.PORT || 6969;

// Example endpoint to get data
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Node.js REST API!' });
});

const axios = require('axios');

app.post('/api/play', async (req, res) => {
    const { input } = req.body;
    try {
        const response = await axios.post('http://localhost:5001/predict', { input });
        res.json(response.data);
    } catch (error) {
        console.error('Error communicating with Python server:', error);
        res.status(500).json({ error: 'Error processing the prediction' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

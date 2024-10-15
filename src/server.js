// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.json()); // For parsing JSON request bodies

// Example endpoint to get data
app.get('/api/play', (req, res) => {
    res.json({ message: 'Hello from Node.js REST API!' });
});

// Example endpoint to receive data and process it
app.post('/api/play', (req, res) => {
    const { input } = req.body;
    // Here you can send input to your ML model and return the response
    res.json({ result: `Received input: ${input}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// Fetch data from the API
fetch('http://localhost:6969/api/play')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

// Send data to the API (e.g., for predictions)
fetch('http://localhost:6969/api/play', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input: 'some input data' }),
})
    .then(response => response.json())
    .then(data => console.log('Played:', data))
    .catch(error => console.error('Error:', error));

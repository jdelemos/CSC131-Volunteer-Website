const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const cors = require('cors'); // Import the cors middleware

const app = express();

// MongoDB connection string
const mongoURI = 'mongodb+srv://jonmichaeldelemos:go22HHane5J8xFWE@cluster0.stcij7x.mongodb.net/SSVOL1';
const dbName = 'SSVOLV1'; 
const collectionName = 'FormDatabase'; 

// Use cors middleware to enable cross-origin requests
app.use(cors());

// Serve static files from the 'test' directory
app.use('/test', express.static(path.join(__dirname, 'test')));

// Route to display data
app.get('/data', async (req, res) => {
  try {
    // Connect to MongoDB
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Access the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Fetch data from MongoDB
    const data = await collection.find().toArray();

    // Send the data as JSON
    res.json(data);

    // Close the MongoDB connection
    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'adminsee.html'));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
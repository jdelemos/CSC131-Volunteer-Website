const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

const mongoURI = 'mongodb+srv://jonmichaeldelemos:go22HHane5J8xFWE@cluster0.stcij7x.mongodb.net/SSVOL1';
const dbName = 'SSVOLV1';
const collectionName = 'FormDatabase';

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'test' directory
app.use('/test', express.static(path.join(__dirname, 'test'), { extensions: ['html', 'css', 'png'] }));

app.get('/data', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find().toArray();

    res.json(data);

    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'adminsee.html'));
});


app.post('/add-element', (req, res) => {
  // Connect to MongoDB
  MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      if (err) {
          return res.status(500).json({ error: 'Error connecting to MongoDB' });
      }

      const db = client.db(dbName);
      const collection = db.collection('FormDatabase');

      // Insert the new element into the collection
      collection.insertOne(req.body, (insertErr, result) => {
          if (insertErr) {
              return res.status(500).json({ error: 'Error adding element to MongoDB' });
          }

          // Close the MongoDB connection
          client.close();

          // Send a response indicating success
          res.json({ success: true, result });
      });
  });
});






const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//need to redo input validation, I think I deleted the version that had it completed


const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

const uri =
  'mongodb+srv://jonmichaeldelemos:go22HHane5J8xFWE@cluster0.stcij7x.mongodb.net/SSVOL1';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Middleware for parsing JSON
app.use(express.json());

async function run() {
  try {
    // Connect the client to the server 
    await client.connect();
    // Send a ping to confirm a successful connection, this should come up in command line
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } finally {
    
  }
}
run().catch(console.dir);

// Serve static files from the root directory
app.use(express.static(__dirname));

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/event.html');
});


// Handle POST request to submit data
app.post('/submit', async (req, res) => {
  const data = req.body;

  try {
    // Insert data into MongoDB
    const result = await client.db('SSVOLV1').collection('Events').insertOne(data);
    console.log('Insert result:', result);

    if (result.insertedCount === 1) {
      console.log('Data inserted successfully');
      res.send('Data inserted successfully');
    } else {
      console.log('Data not inserted successfully:', result);
      res.status(500).send('Data not inserted successfully');
    }
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send('Internal Server Error');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
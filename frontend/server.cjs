const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { MongoClient } = require('mongodb');



const uri = "mongodb://localhost:27017/Shopyournursery";



// Create a new MongoClient
const client = new MongoClient(uri);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection failed:', err));

async function connectDB() {
  try {
      // Connect the client to the server
      await client.connect();
      console.log("Connected successfully to MongoDB");

      // Specify the database you want to use
      const db = client.db('Shopyournursery');

      // Perform any actions with your database (e.g., list collections)
      const collections = await db.listCollections().toArray();
      console.log("Collections:", collections);
  } catch (error) {
      console.error("Connection failed:", error);
  } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
  }
}


connectDB().catch(console.error);




// Middleware
// app.use(cors());
// app.use(express.json());

// MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/plantsDb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));


// Schema and Model
//   const Plant = mongoose.model('Plant', new mongoose.Schema({
//     title: String,
//     markedPrice: Number,
//     price: Number,
//     description: String,
//     benefits: [String],
//     size: [String],
//     place: String,
//     tag: String,
//     reviewsCount: Number,
//     rating: Number,
//     img: String,
//     preOrderStatus: Boolean,
//     imgs: [String],
// }));


// Routes
// app.get('/plants', async (req, res) => {
//   try {
//       const plants = await Plant.find();
//       res.json(plants);
//   } catch (error) {
//       res.status(500).json({ error: 'Error fetching plants data' });
//   }
// });


// Start Server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




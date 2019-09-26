import { any } from "prop-types";

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app: any = express();
const PORT: number | string = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://konouvang:K614008875o@cluster0-cmcgg.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err: any)=> {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

app.listen(PORT, (): void => {
    console.log(`Server is running on port: ${PORT}`);
});
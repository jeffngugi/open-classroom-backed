const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const db =
  'mongodb+srv://openclass:openclass@cluster0-058s1.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Created successfully dhdhh'
  });
});

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oisodaf',
      title: 'My first thing',
      description: 'All of the info about my first thing',
      imageUrl: '',
      price: 4900,
      userId: 'wieojdn1'
    },
    {
      _id: 'oisodaf',
      title: 'My Second thing',
      description: 'All of the info about my first thing',
      imageUrl: '',
      price: 3500,
      userId: 'wieojdn1'
    }
  ];

  res.status(200).json(stuff);
  next();
});

module.exports = app;

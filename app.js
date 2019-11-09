const express = require('express');

const app = express();

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

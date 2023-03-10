// A simple express app
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

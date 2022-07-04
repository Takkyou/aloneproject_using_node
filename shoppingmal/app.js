const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('main');
});

app.listen(PORT, () => {
  console.log('SERVER', PORT);
});

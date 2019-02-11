const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');
require('./database/database')();
const port = 3000;
const app = express();

app.use(bodyParser.json());//1. По този начин казваме, че ще ползваме всичко в  json формат

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/feed', feedRoutes);//по този начин чисто и просто оттук казваме в кой модул (файл) да отива да търси route-а. feedRoutes е всъщност това, което сме експортнали от папка routes във файла feed.js
app.use('/auth', authRoutes);

// General error handling
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
  next();
})

app.listen(port, () => { console.log(`REST API listening on port: ${port}`) });
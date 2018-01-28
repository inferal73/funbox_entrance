const path = require('path');
const express = require('express');

const app = express();

const staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log(`Сервер запущен на localhost:3000`);
});

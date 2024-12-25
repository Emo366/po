const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Местоположение: широта ${latitude}, долгота ${longitude}`);
  res.send('Местоположение получено.');
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
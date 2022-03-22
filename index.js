const express = require('express');

const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log('サーバーが起動しました'));

app.get('/', (req, res) => {
  res.send('Udemy講座を受講中');
});

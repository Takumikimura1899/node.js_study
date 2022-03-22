const express = require('express');

const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log('サーバーが起動しました'));

app.get('/', (req, res) => {
  res.send('Udemy講座を受講中');
});

const customers = [
  { name: '田中', id: 1 },
  { name: '佐藤', id: 2 },
  { name: '鈴木', id: 3 },
  { name: '木村', id: 4 },
  { name: '高橋', id: 5 },
];

app.get('/api/customers', (req, res) => {
  res.send(customers);
});

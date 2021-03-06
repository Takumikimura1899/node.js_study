const express = require('express');

const app = express();
const PORT = 5000;
app.use(express.json());

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

app.post('/api/customers', (req, res) => {
  const customer = {
    name: req.body.name,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customer);
});

//お客様情報の更新
app.put('/api/customers/:id', (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.name = req.body.name;
  res.send(customer);
});

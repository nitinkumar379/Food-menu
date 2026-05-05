const express = require('express');
const app = express();

app.use(express.json());

let cartData = [];

// GET HOME
app.get('/', (req, res) => {
  res.send('Server chal raha hai 🚀');
});

// ADD TO CART API
app.post('/cart', (req, res) => {
  const { id, name, price } = req.body;

  cartData.push({ id, name, price });

  res.json(cartData);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
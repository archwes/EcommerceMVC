const express = require('express');
const cors = require('cors');
const products = require('./data/products.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
  console.log('Requisição recebida para listar produtos.');
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Requisição recebida para o produto ID: ${id}`);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Microsserviço de Produtos rodando na porta ${PORT}`);
});
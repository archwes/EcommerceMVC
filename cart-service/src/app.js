const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Estrutura de dados simples: { userId: [ { ...produto }, { ...produto } ] }
const carts = {};

// Rota para obter o carrinho de um usuário
app.get('/cart/:userId', (req, res) => {
    const { userId } = req.params;
    const userCart = carts[userId] || [];
    res.json(userCart);
});

// Rota para adicionar um item ao carrinho
app.post('/cart/:userId/add', (req, res) => {
    const { userId } = req.params;
    const product = req.body;

    if (!product || !product.productId) {
        return res.status(400).json({ message: 'Dados do produto inválidos.' });
    }

    if (!carts[userId]) {
        carts[userId] = [];
    }

    carts[userId].push(product);
    res.status(200).json(carts[userId]);
});

// Rota para limpar o carrinho (usada pelo serviço de pedidos)
app.delete('/cart/:userId', (req, res) => {
    const { userId } = req.params;
    if (carts[userId]) {
        delete carts[userId];
        return res.status(204).send();
    }
    res.status(404).json({ message: 'Carrinho não encontrado para este usuário.' });
});

app.listen(PORT, () => {
    console.log(`Microsserviço de Carrinho (v1 - Estável) rodando na porta ${PORT}`);
});
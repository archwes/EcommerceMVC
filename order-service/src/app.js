const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3003;
const CART_SERVICE_URL = process.env.CART_SERVICE_URL || 'http://cart-service:3002';

app.use(cors());
app.use(express.json());

const orders = [];

// Rota para criar um novo pedido
app.post('/orders/create', async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ message: 'userId é obrigatório.' });
    }

    try {
        console.log(`[Order-Service] Buscando carrinho para usuário ${userId} em ${CART_SERVICE_URL}`);
        const cartResponse = await axios.get(`${CART_SERVICE_URL}/cart/${userId}`);
        const cartItems = cartResponse.data;

        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ message: 'O carrinho está vazio.' });
        }

        const total = cartItems.reduce((sum, item) => sum + parseFloat(item.productPrice), 0);
        const newOrder = {
            orderId: `ORD-${Date.now()}`,
            userId,
            items: cartItems,
            total,
            createdAt: new Date()
        };
        
        orders.push(newOrder);
        console.log(`[Order-Service] Pedido ${newOrder.orderId} criado com sucesso.`);

        // Limpa o carrinho após criar o pedido
        await axios.delete(`${CART_SERVICE_URL}/cart/${userId}`);
        console.log(`[Order-Service] Carrinho do usuário ${userId} limpo.`);

        res.status(201).json(newOrder);

    } catch (error) {
        console.error('[Order-Service] Erro ao criar pedido:', error.message);
        res.status(500).json({ message: 'Erro ao se comunicar com o serviço de carrinho.' });
    }
});

// Rota para listar os pedidos de um usuário
app.get('/orders/:userId', (req, res) => {
    const { userId } = req.params;
    const userOrders = orders.filter(order => order.userId === userId);
    res.json(userOrders);
});

app.listen(PORT, () => {
    console.log(`Microsserviço de Pedidos rodando na porta ${PORT}`);
});
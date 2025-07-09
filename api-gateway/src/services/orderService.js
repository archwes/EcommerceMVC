const axios = require('axios');
const API_URL = process.env.ORDER_SERVICE_URL;

const createOrder = async (userId) => {
    try {
        const response = await axios.post(`${API_URL}/orders/create`, { userId });
        return response.data;
    } catch (error) {
        console.error('Erro ao criar pedido:', error.response ? error.response.data : error.message);
        return null;
    }
};

const getOrdersByUserId = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/orders/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error.message);
        return [];
    }
};

module.exports = {
    createOrder,
    getOrdersByUserId,
};
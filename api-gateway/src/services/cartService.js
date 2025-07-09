const axios = require('axios');
const API_URL = process.env.CART_SERVICE_URL;

const getCart = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/cart/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`--- ERRO CRÍTICO AO BUSCAR CARRINHO PARA O USUÁRIO ${userId} ---`);
        if (error.response) {
            console.error('Data:', error.response.data);
            console.error('Status:', error.response.status);
        } else if (error.request) {
            console.error('Request feita, mas sem resposta:', error.request);
        } else {
            console.error('Erro na configuração da requisição:', error.message);
        }
        return [];
    }
};

const addToCart = async (userId, productData) => {
    try {
        await axios.post(`${API_URL}/cart/${userId}/add`, productData);
    } catch (error) {
        console.error(`--- ERRO CRÍTICO AO ADICIONAR AO CARRINHO PARA O USUÁRIO ${userId} ---`);
        throw new Error('Não foi possível adicionar o produto ao carrinho.');
    }
};

module.exports = {
    getCart,
    addToCart,
};
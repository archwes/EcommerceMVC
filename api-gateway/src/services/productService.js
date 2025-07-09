const axios = require('axios');

// A URL base é pega do arquivo .env
const API_URL = process.env.PRODUCT_SERVICE_URL;

const getAllProducts = async () => {
  try {
    console.log(`Buscando produtos em: ${API_URL}/products`);
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.message);
    return []; // Retorna um array vazio em caso de erro
  }
};

const getProductById = async (id) => {
  try {
    console.log(`Buscando produto ID ${id} em: ${API_URL}/products/${id}`);
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar produto ID ${id}:`, error.message);
    return null; // Retorna nulo se o produto não for encontrado ou houver erro
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
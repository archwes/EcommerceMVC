const productService = require('../services/productService');

const showProductList = async (req, res) => {
  const products = await productService.getAllProducts();
  res.render('index', { products });
};

const showProductDetail = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductById(id);

  if (!product) {
    return res.status(404).send('Produto não encontrado');
  }

  res.render('product', { product });
};

module.exports = {
  showProductList,
  showProductDetail,
};
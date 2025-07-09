const productService = require('../services/productService');

const showProductList = async (req, res) => {
  const products = await productService.getAllProducts();
  res.render('index', { products }); // Renderiza a view 'index.ejs' e passa os produtos
};

const showProductDetail = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductById(id);

  if (!product) {
    // Idealmente, renderizar uma página de erro 404
    return res.status(404).send('Produto não encontrado');
  }

  res.render('product', { product }); // Renderiza a view 'product.ejs'
};

module.exports = {
  showProductList,
  showProductDetail,
};
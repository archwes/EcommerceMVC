require('dotenv').config();
const express = require('express');
const path = require('path');
const productController = require('./controllers/productController');
const cartController = require('./controllers/cartController');
const orderController = require('./controllers/orderController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas de Produto
app.get('/', productController.showProductList);
app.get('/product/:id', productController.showProductDetail);

// Rotas de Carrinho
app.get('/cart', cartController.showCart);
app.post('/cart/add', cartController.addItemToCart);
app.get('/cart/count', cartController.getCartCount);

// Rotas de Pedido
app.post('/order/create', orderController.placeOrder);
app.get('/order/success', orderController.showOrderConfirmation);
app.get('/orders', orderController.listOrders);



app.listen(PORT, () => {
  console.log(`API Gateway / Servidor MVC rodando na porta ${PORT}`);
});
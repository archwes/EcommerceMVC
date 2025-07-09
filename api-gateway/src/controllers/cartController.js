const cartService = require('../services/cartService');
const MOCK_USER_ID = "123";

const showCart = async (req, res) => {
    const cartItems = await cartService.getCart(MOCK_USER_ID);
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.productPrice || 0), 0);
    
    res.render('cart', {
        cartItems, 
        total 
    });
};

const addItemToCart = async (req, res) => {
    const { productId, productName, productPrice } = req.body;
    
    try {
        const productData = { productId, productName, productPrice };
        await cartService.addToCart(MOCK_USER_ID, productData);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getCartCount = async (req, res) => {
    const cartItems = await cartService.getCart(MOCK_USER_ID);
    res.json({ count: cartItems.length });
};

module.exports = {
    showCart,
    addItemToCart,
    getCartCount,
};
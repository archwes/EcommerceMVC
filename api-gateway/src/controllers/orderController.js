const orderService = require('../services/orderService');
const MOCK_USER_ID = "123";

const placeOrder = async (req, res) => {
    const newOrder = await orderService.createOrder(MOCK_USER_ID);
    if (newOrder && newOrder.orderId) {
        res.redirect(`/order/success?orderId=${newOrder.orderId}`);
    } else {
        res.status(500).send("Não foi possível finalizar o pedido.");
    }
};

const showOrderConfirmation = (req, res) => {
    const { orderId } = req.query;
    res.render('order-success', { orderId });
};

const listOrders = async (req, res) => {
    const orders = await orderService.getOrdersByUserId(MOCK_USER_ID);
    res.render('orders', { orders });
};

module.exports = {
    placeOrder,
    showOrderConfirmation,
    listOrders,
};
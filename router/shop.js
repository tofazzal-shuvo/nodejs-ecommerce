
const express= require('express');

const shopController = require('../controller/shop');

const router = express.Router();

router.get('/', shopController.getHomeProduct);

router.get('/all-product', shopController.getAllProduct);

router.get('/details/:productId',shopController.getProductDetail);

router.get('/cart', shopController.getCart);

router.post('/cart',shopController.postCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders);

module.exports = router;
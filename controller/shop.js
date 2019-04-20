
const productModel = require('../models/productModel');

module.exports.getHomeProduct = (req, res, next)=>{
    productModel.fetchAll(products => {
        //  console.log(products);
        res.render('shop/index.ejs',{
            docTitle: "My Shop",
            products: products,
            path: 'shop'
        });
    });
};
module.exports.getAllProduct = (req, res, next)=>{
    productModel.fetchAll(products => {
        // console.log(products);
        res.render('shop/allProduct.ejs',{
            docTitle: 'All Product',
            products: products,
            path: '/all-product'
        });
    });
};
module.exports.getProductDetail = (req, res, next)=>{
    productModel.findById(req.params.productId, pro =>{
        res.render('shop/product-details.ejs',{
            docTitle: "Product Details",
            path: '/all-product',
            // title: pro.title,
            // imgUrl: pro.imgUrl,
            // price: pro.price,
            // productDecs: pro.productDecs,
            // productId: pro.id
            products: pro
        });
        
    });
};
module.exports.postCart = (req, res, next)=>{
    const productId = req.body.productId;
    console.log("sadfasdfa" + productId);
    res.redirect('/cart');
}
module.exports.getCart = (req, res, next)=>{
    res.render('shop/cart.ejs',{
        docTitle: 'My cart',
        path: '/cart'
    });
}
module.exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout.ejs',{
        path: '/checkout',
        docTitle: 'checkout'
    });
};
module.exports.getOrders = (req, res, next)=>{
    res.render('shop/orders.ejs',{
        docTitle: 'Your Orders',
        path: '/orders'
    });
};
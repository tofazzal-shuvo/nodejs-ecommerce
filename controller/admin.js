
const productModel = require('../models/productModel');

module.exports.getAddProduct = (req, res, next)=>{
    res.render('admin/addProduct.ejs',{
        docTitle: 'Add Product',
        path: '/admin/add-product'
    });
};
module.exports.postAddProduct = (req, res, next)=>{
    const productModelObj = new productModel(
        req.body.title,
        req.body.imgUrl,
        req.body.price,
        req.body.productDecs
    );
    productModelObj.save();
    res.redirect('/');
};
module.exports.getAdminProducts = (req, res, next)=>{
    productModel.fetchAll(products => {
        // console.log(products);
        res.render('admin/products.ejs',{
            docTitle: 'Admin Penel',
            products: products,
            path: '/admin/products'
        });
    });
}
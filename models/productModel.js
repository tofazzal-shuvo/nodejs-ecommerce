
const fs = require('fs');
const path = require('path');

const rootDir = require('../utility/path');

const getProductFromFile = (callback)=>{
    fs.readFile(path.join(rootDir, 'data', 'data.json'), (err, fileContent)=>{
        if(err || fileContent.length == 0){
            return callback([]);
        }
        return callback(JSON.parse(fileContent));
    });
};

module.exports = class ProductModel{
    constructor(title, imgUrl, price, productDecs){
        this.title = title;
        this.imgUrl = imgUrl;
        this.price = price;
        this.productDecs = productDecs;
    };
    save(){
        this.id = Math.random().toString();
        getProductFromFile(product=>{
            product.push(this);
            fs.writeFile(path.join(rootDir, 'data', 'data.json'), JSON.stringify(product), err=>{});
        });
    };
    static fetchAll(callback){
        getProductFromFile(callback);
    }
    static findById(id ,callback){
        getProductFromFile(products =>{
            const product = products.find(p=> p.id === id);
            callback(product);
        });
    }
}
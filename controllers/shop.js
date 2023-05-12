const Product = require('../models/product')



exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods : products,
      pageTitle : "My Shop",
      docTitle : 'Shop',
      path : "/"
    })
  })
}

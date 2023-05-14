const Product = require('../models/product')



exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods : products,
      pageTitle : "My Shop",
      docTitle : 'All Products',
      path : "/products",
    })
  })
}

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId, product => {
    res.render('shop/product-detail', {
      product : product,
      pageTitle : product.title,
      path : "/products"
    })
  })

}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods : products,
      pageTitle : "My Shop",
      docTitle : 'Shop',
      path : "/",
    })
  })
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path : "/cart",
    pageTitle : "Your Cart",
  })

}

exports.postCart = (req, res, nest) => {
  const productId = req.body.productId;
  
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path : "/checkout",
    pageTitle: "Checkout",
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path : "/orders",
    pageTitle: "Orders",
  })
}

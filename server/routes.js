const router = require('express').Router();
const {
  allProducts,
  productInfo,
  styles,
  related,
} = require('./controller');

router.get('/products', allProducts);

router.get('/product/:product_id', productInfo);

router.get('/style/:product_id', styles);

router.get('/related/:product_id', related);

module.exports = router;

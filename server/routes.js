const router = require('express').Router();
const {
  allProducts,
  productInfo,
  styles,
  related,
} = require('./controller');

const path = require("path");

router.get('/products', allProducts);

router.get('/product/:product_id', productInfo);

router.get('/style/:product_id', styles);

router.get('/related/:product_id', related);

router.get("/loaderio-2427e8144bd8182ef91724754e12cc6f.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "./loaderio.txt"));
});

module.exports = router;

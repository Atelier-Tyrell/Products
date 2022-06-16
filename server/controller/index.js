const {
  getAll, getProduct, getStyles, getRelated,
} = require('../model');

module.exports = {
  allProducts: (req, res) => {
    const { count, page } = req.query;

    getAll(count, page)
      .then((results) => res.send(results).status(200))
      .catch(() => res.status(404).send('Not Found'));
  },
  productInfo: (req, res) => {
    getProduct(req.params.product_id)
      .then((results) => res.send(results).status(200))
      .catch(() => res.status(404).send('Not Found'));
  },
  styles: (req, res) => {
    getStyles(req.params.product_id)
      .then((results) => res.send(results).status(200))
      .catch(() => res.status(404).send('Not Found'));
  },
  related: (req, res) => {
    getRelated(req.params.product_id)
      .then((results) => res.send(results).status(200))
      .catch(() => res.status(404).send('Not Found'));
  },
};

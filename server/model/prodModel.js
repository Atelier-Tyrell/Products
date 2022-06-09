const pool = require('../db');

module.exports = {
  getAll: (count = 5, page = 1) => {
    const skipPage = count * (page - 1);
    return (
      pool
        .query(`SELECT * FROM products ORDER BY id ASC LIMIT ${count} OFFSET ${skipPage}`)
        .then((res) => res.rows).catch(() => 'Not Found')
    );
  },
  getProduct: (productId) => (
    pool.query(
      `SELECT
      p.id,
      p.name,
      p.slogan,
      p.description,
      p.category,
      p.default_price,
      json_agg(
        json_build_object(
          'feature', f.feature,
          'value', f.value
        )
      ) AS features
      FROM products p JOIN features f
      ON p.id = f.product_id
      WHERE p.id = ${productId}
      GROUP BY p.id
      ORDER BY p.id ASC
      `)
      .then((res) => res.rows)
      .catch((err) => {
        console.log(err);
        return 'Not Found';
      })
  ),
  getStyles: (productId) => (
    pool.query(
      `SELECT
      p.id,
      p.name,
      p.slogan,
      p.description,
      p.category,
      p.default_price,
      json_agg(
        json_build_object(
          'feature', f.feature,
          'value', f.value
        )
      ) AS features
      FROM products p JOIN features f
      ON p.id = f.product_id
      WHERE p.id = ${productId}
      GROUP BY p.id
      ORDER BY p.id ASC
      `)
      .then((res) => res.rows)
      .catch((err) => {
        console.log(err);
        return 'Not Found';
      })
  ),
  getRelated: () => {},
};

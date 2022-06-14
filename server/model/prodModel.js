const pool = require('../db');

// -- sudo -u isaac psql -d products

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
      (SELECT
        json_agg(
          json_build_object(
            'feature', f.feature,
            'value', f.value
          )
        ) AS features
        FROM features f WHERE f.product_id = p.id
        GROUP BY f.product_id
      )
      FROM products p
      WHERE p.id = ${productId}
      GROUP BY p.id
      ORDER BY p.id ASC`,
    )
      .then((res) => res.rows[0])
      .catch((err) => {
        console.log(err);
        return 'Not Found';
      })
  ),
  getStyles: (productId) => (
    pool.query(
      `SELECT
      s.product_id AS product_id,
      json_agg(
        json_build_object(
          'style_id', s.id,
          'name', s.name,
          'original_price', s.original_price,
          'sale_price', s.sale_price,
          'default?', s.default_style,
          'photos', (
            SELECT
            json_agg(
              json_build_object(
                'thumbnail_url', ph.thumbnail_url,
                'url', ph.main_url
              )
            ) as photo_arr
            FROM photos ph WHERE ph.style_id = s.id
            GROUP BY style_id
          ),
          'skus', (
            SELECT
            json_object_agg(
              sk.id::TEXT, json_build_object(
                'quantity', sk.quantity,
                'size', sk.size
              )
            ) sku_obj
            FROM
              skus sk WHERE sk.style_id = s.id
            GROUP BY style_id
          )
        )
      ) AS results
      FROM styles s
      WHERE s.product_id = ${productId}
      GROUP BY s.product_id`,
    )
      .then((res) => {
        const result = res.rows.length === 0 ? { product_id: `${productId}`, results: [] } : res.rows[0];
        return result;
      })
      .catch((err) => {
        console.log(err);
        return 'Not Found';
      })
  ),
  getRelated: (productId) => (
    pool.query(
      `SELECT
      json_agg(related_id)
      FROM related r
      WHERE r.product_id = ${productId}`,
    )
      .then((res) => res.rows[0].json_agg)
      .catch((err) => {
        console.log(err);
        return 'Not Found';
      })
  ),
};

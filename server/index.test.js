const request = require('supertest');

const app = require('./app');

describe('Get Endpoints', () => {
  test('GET /products', (done) => {
    request(app)
      .get('/products')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        res.body.length = 6;
        res.body[0].name = 'Camo Onesie';
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('GET /products/:productid', (done) => {
    request(app)
      .get('/product/182344')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        res.body.name = 'Alexie Boots';
        res.body.features.length = 3;
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('GET /style/:product_id', (done) => {
    request(app)
      .get('/style/182344')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        res.body.product_id = 182344;
        res.body.results.length = 2;
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('GET /related/:product_id', (done) => {
    request(app)
      .get('/related/182344')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        res.body[0] = 111998;
        res.body.length = 5;
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

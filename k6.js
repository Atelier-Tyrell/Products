/* eslint-disable */

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '30s'
};
export default function() {
  const rnd = Math.floor(Math.random() * (1000011 - 1 + 1)) + 1;
  const res = http.get(`http://localhost:3000/product/${rnd}`);
  check(res, {
    'success': (r) => r.status == 200
  });
};

/* eslint-disable */

import http from 'k6/http';
import { check, sleep, group } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 1000 },
    { duration: '10s', target: 1000 },
    { duration: '20s', target: 0 },
  ]
};
export default function() {
  const rnd = Math.floor(Math.random() * (1000011 - 1 + 1)) + 1;
  const res = http.get(`http://localhost:3000/style/${rnd}`);
  check(res, {
    'success': (r) => r.status == 200
  });
  sleep(1);
};

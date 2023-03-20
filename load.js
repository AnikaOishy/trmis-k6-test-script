import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  duration: '500s', 
  VU: 505,
  // rate: 3, 
  // timeUnit: '3s',
};
export default function () {
  http.get('https://www.existadigital.com/');
  sleep(1);
}


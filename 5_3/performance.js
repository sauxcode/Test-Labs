import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
  vus: 5,               // Bajamos a 5 usuarios virtuales para no saturar tanto
  duration: '20s',      // 20 segundos de prueba
  thresholds: {
    http_req_duration: ['p(95)<1000'], // El 95% de solicitudes en menos de 1 segundo
    http_req_failed: ['rate<0.15'],    // Permitir hasta un 15% de fallos por restricciones de la API gratuita
  },
};


export default function () {
  // Probamos con Rick and Morty API que soporta mejor el tráfico
  const res = http.get('https://rickandmortyapi.com/api/character/39');
  
  check(res, {
    'status es 200': (r) => r.status === 200,
  });

  sleep(1);
}


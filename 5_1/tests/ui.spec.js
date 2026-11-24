const { test, expect } = require('@playwright/test');

test('Debería obtener datos de la API', async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/626'); //  API.URL
    expect(response.status).toBe(200);
    const data = await response.json();
    // Aquí podrías hacer más validaciones sobre los datos recibidos
});

// CASO 1: Validar código HTTP 200 y formato JSON
test('Validar que la API de posts responde con 200 y JSON', async ({ request }) => {
    const response = await request.get('https://rickandmortyapi.com/api/character/626'); //195
    
    // Validar código de respuesta HTTP 200
    expect(response.status()).toBe(200);
    
    // Validar que los datos recibidos sean JSON y contengan información esperada
    const data = await response.json();
    expect(data).toHaveProperty('id');
    expect(typeof data.id).toBe('number');
    expect(data).toHaveProperty('name');
}); 

// CASO 2: Validar código de error HTTP (ej. 404 Not Found)
test('Validar que un recurso inexistente devuelva 404', async ({ request }) => {
    const response = await request.get('https://rickandmortyapi.com/api/character/999999');
    
    // Validar código de respuesta HTTP 404
    expect(response.status()).toBe(404);
});
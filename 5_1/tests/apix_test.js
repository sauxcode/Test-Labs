const { test, expect } = require('@playwright/test');

test('Debería navegar a la página de inicio', async ({ page }) => {
    await page.goto('https://rickandmortyapi.com/');              // URL.Page
    await page.click('text=Texto del botón');                    // Ajusta según el texto del botón
    await expect(page).toHaveURL(/.*https://www.youtube.com/);  // URL esperada
});



// CASO 1: Validar título y navegación principal
test('Validar titulo y navegacion de la pagina', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/*https://www.youtube.com/);
});

// CASO 2: Validar visibilidad de un elemento o botón
test('Validar que exista un enlace o boton principal', async ({ page }) => {
    await page.goto('https://example.com');
    const enlace = page.locator('a');
    await expect(enlace).toBeVisible();
});

// CASO 3: Validar navegación a otra página o enlace externo
test('Validar redireccion al hacer clic en mas informacion', async ({ page }) => {
    await page.goto('https://example.com');
    await page.click('text=More information');
    await expect(page).toHaveURL(/iana\.org/);
});

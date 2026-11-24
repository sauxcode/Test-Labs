const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();

Given('que el usuario se encuentra en la página de detalles del producto {string}', async ({ page }, producto) => {
  await page.goto('https://example.com'); // O la URL de tu tienda
  console.log(`Navegando al producto: ${producto}`);
});

When('el usuario selecciona la talla {string} y hace clic en el botón {string}', async ({ page }, talla, boton) => {
  // Aquí puedes usar comandos reales de Playwright, por ejemplo:
  // await page.click('#add-to-cart-button');
  console.log(`Seleccionó la talla ${talla} usando ${boton}`);
});

Then('el producto {string} debe agregarse al carrito de compras', async ({ page }, producto) => {
  // Aserciones con Playwright
  // await expect(page.locator('.cart-count')).toHaveText('1');
});

Then('el contador del carrito debe mostrar {string} producto', async ({}, arg) => {
  // Step: And el contador del carrito debe mostrar "1" producto
  // From: features\carrite.feature:10:3
});

Given('que el usuario se encuentra en la página de un producto con stock agotado', async ({}) => {
  // Step: Given que el usuario se encuentra en la página de un producto con stock agotado
  // From: features\carrite.feature:13:3
});

When('el usuario hace clic en el botón {string}', async ({}, arg) => {
  // Step: When el usuario hace clic en el botón "Agregar al carrito"
  // From: features\carrite.feature:14:3
});

Then('el sistema debe mostrar un mensaje de error que indique {string}', async ({}, arg) => {
  // Step: Then el sistema debe mostrar un mensaje de error que indique "Producto agotado temporalmente"
  // From: features\carrite.feature:15:3
});

Then('el carrito de compras debe permanecer vacío', async ({}) => {
  // Step: And el carrito de compras debe permanecer vacío
  // From: features\carrite.feature:16:3
});

Given('que el usuario tiene productos por un valor de ${float} en su carrito', async ({}, arg) => {
  // Step: Given que el usuario tiene productos por un valor de $100.00 en su carrito
  // From: features\carrite.feature:19:3
});

When('el usuario introduce el código de cupón {string} y hace clic en {string}', async ({}, arg, arg1) => {
  // Step: When el usuario introduce el código de cupón "BIENVENIDA10" y hace clic en "Aplicar"
  // From: features\carrite.feature:20:3
});

Then('el sistema debe aplicar un {int}% de descuento', async ({}, arg) => {
  // Step: Then el sistema debe aplicar un 10% de descuento
  // From: features\carrite.feature:21:3
});

Then('el nuevo total a pagar debe actualizarse a ${float}', async ({}, arg) => {
  // Step: And el nuevo total a pagar debe actualizarse a $90.00
  // From: features\carrite.feature:22:3
});

When('el usuario introduce un código de cupón falso {string} y hace clic en {string}', async ({}, arg, arg1) => {
  // Step: When el usuario introduce un código de cupón falso "XYZ123" y hace clic en "Aplicar"
  // From: features\carrite.feature:26:3
});

Then('el total a pagar debe mantenerse en ${float}', async ({}, arg) => {
  // Step: And el total a pagar debe mantenerse en $50.00
  // From: features\carrite.feature:28:3
});

Given('que el usuario está en la pantalla de pago con un pedido de ${float} en su carrito', async ({}, arg) => {
  // Step: Given que el usuario está en la pantalla de pago con un pedido de $90.00 en su carrito
  // From: features\carrite.feature:31:3
});

When('el usuario ingresa los datos de una tarjeta válida y hace clic en {string}', async ({}, arg) => {
  // Step: When el usuario ingresa los datos de una tarjeta válida y hace clic en "Confirmar Pago"
  // From: features\carrite.feature:32:3
});

Then('el sistema debe procesar la transacción de forma exitosa', async ({}) => {
  // Step: Then el sistema debe procesar la transacción de forma exitosa
  // From: features\carrite.feature:33:3
});

Then('debe mostrar una pantalla de confirmación con el número de orden generado', async ({}) => {
  // Step: And debe mostrar una pantalla de confirmación con el número de orden generado
  // From: features\carrite.feature:34:3
});

Then('el carrito de compras debe quedar completamente vacío', async ({}) => {
  // Step: And el carrito de compras debe quedar completamente vacío
  // From: features\carrite.feature:35:3
});

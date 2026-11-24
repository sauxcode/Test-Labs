const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

// Configuramos dónde están los archivos .feature y dónde están los pasos (step definitions)
const testDir = defineBddConfig({
	features: 'features/*.feature',      // Ruta donde guardaste tus escenarios Gherkin
	steps: 'tests/steps.js',             // Ruta donde escribiste la lógica de los pasos
});

module.exports = defineConfig({
	testDir,                             // Usamos la configuración de BDD como directorio de pruebas
	reporter: 'html',                    // Genera un reporte visual al terminar
	use: {
		headless: true,                    // Ponlo en 'false' si quieres ver el navegador abrirse visualmente
		screenshot: 'on',                  // Toma captura si falla alguna prueba
		trace: 'on-first-retry',
	},
	projects: [
	{
	name: 'chromium',
	use: { browserName: 'chromium' },
	},
	],
});

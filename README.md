# Test-Labs (Portafolio de Pruebas Automatizadas y de Rendimiento)
Repositorio oficial que contiene las evidencias y soluciones correspondientes a las prácticas de automatización de pruebas, comportamiento y rendimiento del Laboratorio de Lenguajes de Programación III.

###📂 Estructura del Repositorio (para más detalles, vease arch. MainMap.txt)
```text
.
├── features/               # Práctica 5.2: Escenarios BDD (Gherkin)
│   └── carrite.feature
├── tests/                  # Prácticas 5.1 y 5.2: Pruebas de UI, API y Steps de BDD
│   ├── api_test.js
│   ├── ui.spec.js 
│   └── steps.js
├── performance/            # Práctica 5.3: Pruebas de Performance con k6
│   └── performance.js
├── playwright.config.js    # Configuración de Playwright
├── package.json            # Dependencias del proyecto
└── .gitignore
```

##🧪 Práctica 5.1: Pruebas Automatizadas con Playwright
Descripción: Automatización de pruebas de interfaz de usuario (UI) y validación de respuestas HTTP y datos JSON consumiendo la API de Rick and Morty.
Comando de ejecución:
```bash
npx playwright test tests/ui.spec.js
```

##🥒 Práctica 5.2: BDD con Gherkin y Playwright (playwright-bdd)
Descripción: Implementación de comportamiento guiado por desarrollo (BDD) estructurado en escenarios Given/When/Then para una tienda virtual (gestión de carrito, validación de códigos de descuento y proceso de pago).
Comando de ejecución:
```bash
npx test
```
##⚡ Práctica 5.3: Pruebas de Performance con k6
Descripción: Evaluación del rendimiento y estabilidad de un servicio web simulando carga de usuarios concurrentes.
Herramienta: k6
Comando de ejecución:
```bash
k6 run performance/performance.js
```

Evidencia: La captura de pantalla con los resultados exitosos se encuentra en performance/Yea.png.

##🚀 Autor
Estudiante: Saul Alexander Sanchez Bautista
Asignatura: INF5170-1 (Laboratorio de Lenguajes de Programación III)

Feature: Carrito de compras
  Como usuario de la tienda en línea
  Quiero agregar productos al carrito y aplicar cupones
  Para realizar mis compras correctamente

Scenario: Agregar un producto con stock al carrito
  Given que el usuario se encuentra en la página de detalles del producto "Camisa Deportiva"
  When el usuario selecciona la talla "M" y hace clic en el botón "Agregar al carrito"
  Then el producto "Camisa Deportiva" debe agregarse al carrito de compras
  And el contador del carrito debe mostrar "1" producto

Scenario: Intentar agregar un producto agotado
  Given que el usuario se encuentra en la página de un producto con stock agotado
  When el usuario hace clic en el botón "Agregar al carrito"
  Then el sistema debe mostrar un mensaje de error que indique "Producto agotado temporalmente"
  And el carrito de compras debe permanecer vacío

Scenario: Aplicar un cupón de descuento válido en el carrito
  Given que el usuario tiene productos por un valor de $100.00 en su carrito
  When el usuario introduce el código de cupón "BIENVENIDA10" y hace clic en "Aplicar"
  Then el sistema debe aplicar un 10% de descuento
  And el nuevo total a pagar debe actualizarse a $90.00

Scenario: Intentar aplicar un cupón inválido o expirado
  Given que el usuario tiene productos por un valor de $50.00 en su carrito
  When el usuario introduce un código de cupón falso "XYZ123" y hace clic en "Aplicar"
  Then el sistema debe mostrar un mensaje de error que indique "El cupón no es válido o ha expirado"
  And el total a pagar debe mantenerse en $50.00

Scenario: Pago exitoso con tarjeta de crédito
  Given que el usuario está en la pantalla de pago con un pedido de $90.00 en su carrito
  When el usuario ingresa los datos de una tarjeta válida y hace clic en "Confirmar Pago"
  Then el sistema debe procesar la transacción de forma exitosa
  And debe mostrar una pantalla de confirmación con el número de orden generado
  And el carrito de compras debe quedar completamente vacío

# Challenge: Implementar catálogo de productos con 
# FILTROS COMBINADOS en el backend

## Requisitos:

1. Utilizar el archivo .json adjunto como base de datos.

2. Utilizar Express para crear el servidor backend.

3. Implementar una ruta GET /products que devuelva todos los productos de la base de datos.

4. Implementar filtros combinados en la ruta GET /products para los siguientes parámetros:
- category: Filtrar por categoría de producto.
    - cell_phone (3)
    - memory (2)
    - clock (3)
    - ipad (2)
    - iphone (3)
    - tablet (3)
    - printer (1)
    - headphone (1)
- price:
    - minPrice: Filtrar por precio mínimo.
    - maxPrice: Filtrar por precio máximo.
- condition: Filtrar por condición:
    - new
    - used

5. La respuesta de la ruta /products debe devolver los productos filtrados según los parámetros recibidos (preferentemente utilizando queries).

6. Implementar React en la aplicación. Inicializar el front-end usando Vite.

7. Crear un componente de React llamado "Products" que renderice una lista de productos. Este componente debe obtener los datos del catálogo de productos utilizando una solicitud GET.

8. Crear un componente de React llamado "Sidebar" que contenga los filtros para el catálogo de productos. Este componente debe tener checkboxes para filtrar por categoría, checkboxes para filtrar los 10 productos más baratos y los 10 productos más caros, checkboxes para filtrar por "nuevo" y "usado", y una barra de búsqueda para buscar productos por título.

9. Recuerda que la ruta de la API debe aceptar consultas con los parámetros (queries) de filtrado y devolver los productos que cumplan con los filtros seleccionados.

10. El componente "Products" debe actualizar la lista de productos mostrados en respuesta a los cambios en los filtros.

## Considerar

Recuerda utilizar React y Vite para configurar tu proyecto y levantar la aplicación.

Este desafío te permite implementar un catálogo de productos con filtros combinados desde el backend utilizando Express. Puedes ajustar el código según tus necesidades y ampliarlo para agregar más funcionalidades o mejorar la interfaz de usuario en el frontend. ¡Buena suerte con tu proyecto!

En cuanto al diseño, te invito a que lo realices según tus preferencias.

¡Buena suerte con el desafío!

```json
[
    {
        "id":1,
        "title":"Celular MOTOROLA MOTO E13",
        "description":"Celular de 6.5. IPS (720 x 1600) HD+, 60 HZ. Procesador Octa core 1.6 GHz",
        "image":"https://tosellihogar.com.ar/wp-content/uploads/2023/01/4682-8.jpg",
        "stock":5,
        "category": "cell_phone",
        "condition":"new",
        "price": 2
    },
    {
        "id":2,
        "title":"Tarjeta de memoria Kingston SDCS",
        "description":"Esta tarjeta MicroSDHC es ideal para móviles. Su tamaño pequeño facilita su uso y ofrece gran comodidad y practicidad",
        "image":"https://http2.mlstatic.com/D_NQ_NP_2X_927143-MLA42003898015_052020-F.webp",
        "stock":6,
        "category": "memory",
        "condition":"new",
        "price": 323
    },
    {
        "id":3,
        "title":"SDHC CARD 16GB MITSUBISHI",
        "description":"Memoria estándar SDHC de 16 GB",
        "image":"https://ar.wiautomation.com/public/images/landing/anticipa/product/ixr5kSQBju7Pi7pvKubx0cCQDzxzM0xa3Hlr00yP7SF08CUNTw2NwdbmOqJl.jpg",
        "stock":6,
        "category": "memory",
        "condition":"used",
        "price": 433
    },
    {
        "id":4,
        "title":"Motorola Moto G71",
        "description":"Características y precio del nuevo móvil de gama media",
        "image":"https://s1.eestatic.com/2021/11/18/elandroidelibre/moviles-android/628198853_215362143_1706x960.jpg",
        "stock":4,
        "category": "cell_phone",
        "condition":"new",
        "price": 532
    },
    {
        "id":5,
        "title":"APPLE IPHONE 13 PRO 512GB GREEN",
        "description":"Pantalla Super Retina XDR de 6.7 pulgadas con ProMotion",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE--IPHONE-13-PRO-512GB-GREEN.webp",
        "stock":20,
        "category": "iphone",
        "condition":"used",
        "price": 24
    },
    {
        "id":6,
        "title":"APPLE WATCH SERIE SE 44MM RELOJ SILVER",
        "description":"El Apple Watch SE tiene el mismo tamaño de pantalla que el Apple Watch",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE-WATCH-SERIE-SE-44MM-RELOJ-SILVER.webp",
        "stock":22,
        "category": "clock",
        "condition":"used",
        "price": 2432
    },
    {
        "id":7,
        "title":"Impresora HP Deskjet Advantage 2375",
        "description":"Imprima, escanee y copie los documentos cotidianos con la todo en uno más asequible de HP",
        "image":"https://front.dev.malditohard.com.ar/img/migration/Impresora-HP-Deskjet-Advantage-2375.webp",
        "stock":2,
        "category": "printer",
        "condition":"new",
        "price": 234
    },
    {
        "id":8,
        "title":"APPLE WATCH SERIE 3 RELOJ 42MM SPACE",
        "description":"Apple Watch Series 3 GPS",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE-WATCH-SERIE-3-RELOJ-42MM-SPACE-GREY-GPS.webp",
        "stock":3,
        "category": "clock",
        "condition":"new",
        "price": 2342
    },
    {
        "id":9,
        "title":"Apple iPhone 13 Pro Max",
        "description":"Pantalla Super Retina XDR de 6.7 pulgadas con ProMotion que brinda una respuesta más rápida",
        "image":"https://http2.mlstatic.com/D_NQ_NP_2X_882160-MLA47775355993_102021-F.webp",
        "stock":7,
        "category": "iphone",
        "condition":"used",
        "price": 2342
    },
    {
        "id":10,
        "title":"APPLE AIRPODS GENERACION 3 GEN",
        "description":"Los AirPods son livianos y ofrecen un diseño contorneado. Se sientan en el ángulo correcto para mayor comodidad y para dirigir mejor el audio a su oído",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE-AIRPODS-GENERACION-3-GEN.webp",
        "stock":14,
        "category": "headphone",
        "condition":"new",
        "price": 46
    },
    {
        "id":11,
        "title":"APPLE WATCH SERIE 8 41MM RELOJ RED",
        "description":"Características de seguridad innovadoras: la detección de golpes y la detección de caídas pueden conectarte automáticamente con servicios de emergencia en caso de un choque severo en el coche o una caída dura",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE-WATCH-SERIE-8-41MM-RELOJ-RED.webp",
        "stock":4,
        "category": "clock",
        "condition":"new",
        "price": 31456
    },
    {
        "id":12,
        "title":"Samsung Galaxy Z Flip4 5G 256/8GB",
        "description":"Celular. Pantalla de 6.6\", 2640 x 1080 (FHD+), Dynamic AMOLED 2X, 120Hz. Procesador Snapdragon 8+ gen 1 Qualcomm SM8475, Octa core 3.18GHz,2.7GHz,2GHz",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/353775-1000-1000/image-c4aebff59af3460a8fd362de463f6bc5.jpg?v=637983425000730000",
        "stock":4,
        "category": "cell_phone",
        "condition":"new",
        "price": 135
    },
    {
        "id":13,
        "title":"TABLET KANJI KJ-ARIZONA 7' 16 GB NEGRO",
        "description":"Tablet. Pantalla: 7\" con una resolucion de 1024 x 600 Px. Procesador: Quad Core. Almacenamiento: 16 Gb. Memoria RAM: 2 Gb. Wifi. Bluetooth",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/403253-500-500/image-f8c02d7d65e34df097e6b57e359ac50b.jpg?v=638151083134600000",
        "stock":5,
        "category": "tablet",
        "condition":"used",
        "price": 143
    },
    {
        "id":14,
        "title":"TABLET POSITIVO BGH T770K 7' 16GB NEGRO",
        "description":"Pant.7\" 1024x600px . Proc.Rockchip 3326 1.5Ghz. SO Android 8.1. Memoria int.16Gb/RAM 1Gb. Camara frontal 0.3mp. Wi-Fi. Multitouch. USB. Video HD. Bateria 2400mAh. Incluye: funda de silicona, cargador, cable USB",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/405566-1000-1000/image-37a62e119e8a4f31b418769a7f125565.jpg?v=638163037014930000",
        "stock":6,
        "category": "tablet",
        "condition":"used",
        "price": 134
    },
    {
        "id":15,
        "title":"TABLET X-VIEW MYMO MAX 7' 32 GB ROJO",
        "description":"Tablet. Sistema operativo Android 8.1. Pantalla LCD 7. Resolucion HD 1024 x 600 Px. Almacenamiento: 32 GB. Memoria RAM 2GB DDR3. Multi touch capacitiva. Conexion Micro USB. Dual camera 0.3mp / 2.0mp. Slot Micro SD (expansible hasta 128GB). Conexion WiFi 8",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/398246-1000-1000/image-0e2e87803e7d4f8f8bed89d98ec59709.jpg?v=638143238344070000",
        "stock":6,
        "category": "tablet",
        "condition":"used",
        "price": 134
    },
    {
        "id":16,
        "title":"Apple Smart Folio p/ iPad Pro 11",
        "description":"La funda Smart Folio está fabricada con una única pieza de poliuretano para proteger tu iPad Air por ambos lados. También lo activa cuando la abres y lo pone en reposo cuando la cierras. Puedes plegar la Smart Folio en distintas posiciones y convertirla en el soporte perfecto para leer, escribir, ver películas o hacer videollamadas FaceTime.",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/390043-1000-1000/image-5c790b14abdb411c8e5c7af09405013f.jpg?v=638116505512970000",
        "stock":7,
        "category": "ipad",
        "condition":"new",
        "price": 3141
    },
    {
        "id":17,
        "title":"iPad mini Wi-Fi 64GB (6ta Gen) - Space Grey",
        "description":"iPad mini Wi-Fi 64GB (6ta Gen). Nuevo iPad mini Grande en poder. Mini en tamaño. Marca: Apple Línea: iPad Mini 6ta Gen Procesador: Chip A15 Bionic con arquitectura de 64 bits Capacidad: 64GB Tamaño de la pantalla: 8,3 Con conexión celular: no Nombre del sistema operativo: iPadOS15 Conectividad: wifi-bluetooth Cantidad de cámaras traseras: 1 Alto: 19,54 cm Ancho: 13,48 cm Profundidad: 0,63 cm Peso: 293 g",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/390039-1000-1000/image-f4f9b08fe8d24c4bb624f401f21e935a.jpg?v=638116500424370000",
        "stock":8,
        "category": "ipad",
        "condition":"new",
        "price": 1345
    },
    {
        "id":18,
        "title":"iPhone con iOS 14 - Apple (LA)",
        "description":"iOS 14 viene con nuevas formas de personalizar la pantalla de inicio, descubrir y usar apps con App Clips, y mantenerse conectado con Mensajes",
        "image":"https://www.apple.com/newsroom/images/product/os/ios/standard/Apple_ios14-app-library-screen_06222020_inline.jpg.large.jpg",
        "stock":8,
        "category": "iphone",
        "condition":"new",
        "price": 345
    }
]
```










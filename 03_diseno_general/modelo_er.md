# Modelo Entidad–Relación 

El modelo ER define la estructura de datos necesaria para soportar el registro de usuarios y la creación de PQRs.

## Entidades
- Usuario: almacena la información de los clientes.
- PQR: representa las peticiones, quejas o reclamos registrados.
- Tipo_PQR: define la clasificación de la PQR y su tiempo máximo de respuesta.

## Relaciones
- Un usuario puede registrar múltiples PQRs.
- Cada PQR pertenece a un único usuario y a un único tipo de PQR.

![Modelo ER](img_documentos/ER%20Sistema%20de%20PQR.png)
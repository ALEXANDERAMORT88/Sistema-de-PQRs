## Casos de uso: Registrar PQR
Actor: Clientes.

## Descripción
Permite al cliente autenticarse en el sistema y registrar una Petición, Queja o Reclamo (PQR), la cual será almacenada y gestionada según los tiempos establecidos.

## Precondición: 
    -	El cliente debe tener un usuario registrado en el sistema.
    -	El sistema debe estar disponible.

## Flujo principal:
    -   El cliente ingresa al sistema.
    -   El sistema solicita usuario y contraseña.
    -   El cliente ingresa sus credenciales.
    -	El sistema valida la información del usuario.
    -	El sistema muestra el formulario de registro de PQR.
    -	El cliente ingresa los datos requeridos de la PQR (tipo, descripción, prioridad).
    -  	El cliente envía el formulario.
    -	El sistema valida la información ingresada.
    -	El sistema registra la PQR.
    -	El sistema genera un número de radicado.
    -	El sistema asigna los tiempos estimados de solución.
    -	El sistema confirma el registro de la PQR al cliente.

## Flujos Alternos
FA1: Credenciales incorrectas

En el paso 4, si las credenciales son incorrectas:
    -	El sistema muestra un mensaje de error.
    -	El cliente puede reintentar el inicio de sesión.

FA2: Campos obligatorios incompletos

En el paso 8, si faltan datos obligatorios:
    -	El sistema indica los campos faltantes.
    -	El cliente corrige la información.
    -	El flujo regresa al paso 7.

## Excepciones
E1: Error del sistema al registrar la PQR
En el paso 9:

    -	El sistema muestra un mensaje de error.
    -	La PQR no queda registrada.
    -  	Se registra el error para revisión técnica.

## Reglas de Negocio
    -	RN1: Toda PQR debe estar asociada a un cliente.
    -	RN2: El número de radicado debe ser único.
    -	RN3: Los tiempos de solución dependen del tipo de PQR.
    -	RN4: No se puede registrar una PQR sin autenticación.

## Postcondiciones
    -	La PQR queda registrada en el sistema.
    -	La PQR queda asociada al cliente.
    -	El cliente puede consultar el estado de su PQR.
# Notes

## Aplicación de notas simple

### Tecnologías

En esta directorio encontrar dos carpetas, la carpeta Server y la Client, ambas referidas asi por sus contenidos (Server es la parte de back-end y Client es la parte front-end)

####  Cd server

- Node.js 
- Express
- Mongodb (database)
- Socket.io (webSockets)

#### Cd Client

- React

---------------------------------------------------------------------------

### Como iniciar

Para iniciar primero debemos instalar las dependencias en ambos directorios, una vez descargado el repositorio ingresar el siguiente comando en la consola situándose sobre los directorios Server y Client

```js
npm install
```

Luego, parados nuevamente dentro de ambos directorios, iniciaremos la aplicacion con el siguiente comando 

```js
npm start
```

Esto en la carpeta Client nos abrira una pestaña de tu navegador predefinido y nos dara la posibilidad de interactuar en el front end.

Mientras tanto al hacerlo en la carpeta Server nos iniciara por consola el servidor. Si bien esta configurado para que desde el navegador ingresando con el localhost:3030 (ese es el puerto por defecto) puedas interactuar con un "front-end", no te lo recomiendo ya que esta preparado para usarse desde el client.

***Tanto el puerto en el backend como el EndPoint en el front end estan por defecto en el 3030 (el servidor emite por ese puerto y el cliente lo escucha), podes cambiar esto en ambos***

**Server (Buscar en la carpeta src el archivo app.js) **

**Client (Buscar en la carpeta src/Context el archivo SocketContext.jsx)**



## Autor

Gregorio Carranza Torres

Año 2021 
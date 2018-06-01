## Search Meli App 

Esta es una app desarrollada con Express, React + Redux y Node. Se utilizó Redux para obtener un mejor control del estado de la aplicación pensando en la escabilidad de la misma. Ayuda también a separar responsabilidades y a tener todo más componentizado.

Se utilizó también webpack para generar los bundles que van a servir a la app. Estos se concatenan y minifican entre otras mejoras como el uso de source maps.

## Setup

Tenemos
- client (react app)
- server (node app) - "wrapper"

Necesitamos antes de empezar tener instalado:
- node v8.11.1 (mínimo, yo estuve corriendo todo con v10.2.1)
- npm

Luego de esto vamos a la carpeta `/server` y en la terminal corremos:

```bash
$ npm install
$ npm install -g nodemon
```

Una vez termine podemos correr el servidor:

```bash
> npm start ó nodemon app_hooked.js

[nodemon] 1.75.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app_hooked.js`
Search Server Listening at 3001
```

Ahora necesitamos iniciar el cliente, para eso, en otra terminal vamos a la carpeta `/client` y hacemos:

```bash
$ npm install
```

Luego de eso corremos en la misma terminal `npm start`, comenzará a correr webpack creando los assets y se abrirá automáticamente en un browser la app. Si no lo hace probar con `http://localhost:3000/`.

De la forma que mencioné antes no va a estar optimizado el cliente, si querés correr la versión optimizada (minificado, ofuscado, service worker etc) tenés que correr:

```bash
$ npm run build
$ npm install -g serve
$ serve -s build

INFO: Accepting connections at http://localhost:3000
```

## Comentarios
- Los png utilizados como íconos (lupa, shipping) podrían convertirse a svg y hacer una fuente svg (performa mejor y nos abstraemos del DPR de las pantallas).
- A falta de diseño o simplicidad no se maquetó la vista mobile/tablet
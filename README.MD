# Entregable Prueba Técnica Backend Node.js

Prueba backend desarrollada con nodejs, Typescript, postgresql y typeorm ademas de docker

## Entrega

- Repositorio GIT con código fuente
  (El codigo Fuente compilado de la aplicacion se encuentra en la carpeta /dist)

- Archivos docker-compose para ejecutar el contenedor de aplicaciones, base de datos postgresql, el servidor nginx ademas de la aplicacion node

- Enlace a la documentacion de los recursos en postman (https://documenter.getpostman.com/view/8647074/U16gRTMs)

## Guia de Instalacion y ejecucion

para la instalacion de este proyecto debemos tener instalado en nuestra maquina

- Nodejs
- npm
- Git
- Docker

con el comando que veremos a continuacion descargaremos el repositorio con el codigo y los archivos necesarios para correr la aplicacion y todo lo que esta necesita

```
git clone https://github.com/mabravo153/smartsoft.git

cd smartsoft
```

dentro de la carpeta del proyecto. hay un archivo llamado web-variables.env.example, debemos re-nombrarlo y debe quedar como se indica a continuacion

```
web-variables.env
```

este archivo sera necesario para la creacion del contenedor docker.

hay que tener en cuenta que las variables de la base de datos en el archivo web-variables.env deben ser similares a las que el contenedor de base de datos tiene en el archivo docker-compose.yml, ademas el puerto debe ser el indicado en el archivo ya que ese puerto es el que estara escuchando el contenedor nginx

realizado estos cambios podemos ejecutar el comando

```
npm run docker-run-build
```

este comando levantara los contenedores de postgresql, nginx y la app en un ambiente de produccion. ademas creara la imagen. con el nombre de smartsoft_node-app

## Guia de Instalacion ambiente de desarrollo

para la instalacion de este proyecto debemos tener instalado en nuestra maquina

- Nodejs
- npm
- Git
- Docker
- tsc

con el comando que veremos acontinuacion descargaremos el repositorio con el codigo y los archivos necesarios para correr la aplicacion y todo lo que esta necesita

```
git clone https://github.com/mabravo153/smartsoft.git

cd smartsoft
```

dentro de la carpeta del proyecto. hay un archivo llamado web-variables.env.example, debemos re-nombrarlo y debe quedar como se indica a continuacion

```
web-variables.env
```

este archivo sera necesario para la creacion del contenedor docker.

hay que tener en cuenta que las variables de la base de datos en el archivo web-variables.env deben ser similares a las que el contenedor de base de datos tiene en el archivo docker-compose.yml, ademas el puerto debe ser el indicado en el archivo ya que ese puerto es el que estara escuchando el contenedor nginx

ademas de este paso, debemos ejecutar

```
npm install
```

esto instalara localmente todas las dependencia que la aplicacion necesita.

realizado estos cambios podemos ejecutar el comando

```
npm run docker-dev
```

este comando levantara los contenedores de postgresql, nginx y la app en un ambiente de desarrollo. ademas creara la imagen. con el nombre de smartsoft_node-app.

al crear los contenedores en un ambiente de desarrollo permitira modificar el codigo del mismo usando el comando

```
npm run build
```

esto compilara el codigo de typescript y por medio de volumenes anonimos sera pasado al contenedor en ejecucion

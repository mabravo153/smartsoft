# Entregable Prueba Técnica Backend Node.js

Prueba backend desarrollada con nodejs, Typescript, postgresql y typeorm ademas de docker

## Entrega

- Repositorio GIT con código fuente
  (El codigo Fuente compilado de la aplicacion se encuentra en la carpeta /dist)

- Archivos docker-compose para ejecutar el contenedor de aplicaciones, base de datos postgresql, el servidor nginx ademas de la aplicacion node

- Enlace a la documentacion de los recursos en postman (https://documenter.getpostman.com/view/8647074/U16gRTMs)

## Guia de Instalacion

para la instalacion de este proyecto debemos tener instalado en nuestra maquina

- Nodejs
- npm
- Git
- Docker

con el comando que veremos acontinuacion descargaremos el repositorio con el codigo y los archivos necesarios para correr la aplicacion y todo lo que esta necesita

```
git clone https://github.com/mabravo153/smartsoft.git

cd smartsoft
```

luego de estar dentro de la carpeta del proyecto. debemos crear un archivo llamado

```
web-variables.env
```

este archivo sera necesario para la creacion del contenedor docker. en el repositorio hay incluido un archivo de ejemplo. es necesario quitar el .example del final para que este sea funcional

hay que tener en cuenta que las variables de la base de datos deben ser similares a las que el contenedor de base de datos tiene en el archivo docker-compose.yml. ademas el puerto debe ser el indicado ya que ese puerto es el que estara escuchando nginx

```

```

este comando levantara todo lo que la app necesita

# API Envios para Kiki Latam

## Introducción

La **API Envios para Kiki Latam** resuelve la prueba api de ingreso a Kiki.

## Características

- **Creación de envíos**: Genera nuevos pedidos de envío con la tarifa indicada
- **Lista de envíos**: Genera lista de los envios guardados
- **Persistencia en Sqlite**: Clona el repositorio y se obtienen las pruebas solicitadas en las pruebas

## Requisitos Previos

- **Node.js**
- **npm** 
- **Docker** 

## Instalación

1. Clona el repositorio:

   `git clone https://github.com/kikilatam/api-envios.git`

2. Inicia el docker:

  `sudo docker-compose up`

3. Lista lo que existe en la base de datos

  `curl http://localhost:3000/envios`

4. Inserta más datos

  ```curl -X POST http://localhost:3000/envios \
  -H "Content-Type: application/json" \
  -d '{
    "destinatario": "Cliente n",
    "remitente": "Empresa n",
    "contenido": "Producto n",
    "distancia": 100
  }'``


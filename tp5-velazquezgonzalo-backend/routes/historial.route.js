//defino controlador para el manejo de CRUD 
const historialCtrl = require('./../controllers/historial.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.get('/:idProducto', historialCtrl.getHistorialPorProducto);
//exportamos el modulo de rutas
module.exports = router;
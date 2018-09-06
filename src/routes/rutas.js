const express = require('express');
const router=express.Router();
const controles= require('../controllers/controles');



router.get('/', controles.visualizar);
router.get('/datosservidor', controles.listar);
router.get('/tablafutbol', controles.listarfutbol);

 //router.post('/Insertar', controles.insertar);
// router.get('/borrar/:id', controles.borrar);
// router.get('/actualizar/:id', controles.editar);
// router.post('/actualizar/:id', controles.actualizar);
 

module.exports=router;

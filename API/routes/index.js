var express = require('express');
var router = express.Router();
var Plantas = require('../controler/plantas')

/* GET home page. */
router.get('/plantas', function(req, res, next) {
  if(req.query.especie){
   Plantas.especies(req.query.especie)
    .then(plantas=>{
      res.json(plantas)
    })
    .catch(erro=>{
      res.status(601).json({ message: "Erro a obter lista de especies",error:erro })
    })
  }else if(req.query.implant){
   Plantas.implantacoes(req.query.implant)
    .then(plantas=>{
      res.json(plantas)
    })
    .catch(erro=>{
      res.status(601).json({ message: "Erro a obter lista de implatacoes",error:erro })
    })
  }else{
    Plantas.all()
    .then(plantas=>{
      res.json(plantas)
    })
    .catch(erro=>{
      res.status(601).json({ message: "Erro a obter lista de plantas",error:erro })
    })
  }
});

router.get('/plantas/:id', function(req, res, next) {
  Plantas.getPlanta(req.params.id)
    .then(planta=>{
      res.json(planta)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter planta",error:erro })
    })
});

router.get('/plantas/freguesias', function(req, res, next) {
 Plantas.freguesias()
    .then(planta=>{
      res.status(201).json(planta)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar planta",error:erro })
    })
});

router.get('/plantas/especies', function(req, res, next) {
  Plantas.distinctEspecies()
    .then(planta=>{
      res.json(planta)
    })
    .catch(erro=>{
      res.status(604).json({ message: "Erro a atualizar planta",error:erro })
    })
});

router.post('/plantas', function(req, res, next) {
  Plantas.addPlantas(req.body)
    .then(planta=>{
      res.status(201).json(planta)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar planta",error:erro })
    })
});

router.delete('/plantas/:id', function(req, res, next) {
  Plantas.deletePlanta(req.params.id)
    .then(planta=>{
      res.json(planta)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar planta",error:erro })
    })
});

module.exports = router;

var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas")
    .then(dados=>{
      res.render('paginaPrincipal', { plantas: dados.data, d: data });
    })
    .catch(erro=>{
    
      res.render('error', { error: erro,message:"Erro a obter lista de exames" });
    })
});

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas/"+req.params.id)
      .then(dados=>{
        res.render('perfilPlanta', { planta: dados.data, d: data });
      })
      .catch(erro=>{
    
      }) 
});

router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas/"+req.params.id)
      .then(dados1=>{
          console.log(dados1)
          axios.get("http://localhost:15030/plantas?especie="+dados1.data.Espécie)
            .then(dados2=>{
              res.render('perfilEspecie', { plantas: dados2.data, exemplar: dados1.data, d : data});
            })
            .catch(erro=>{
            
            }) 
      })
      .catch(erro=>{
    
      }) 
});

module.exports = router;

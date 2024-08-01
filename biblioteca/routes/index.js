var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Procópio na Rede' });
});


router.get('/sobre', function(req, res) {
  res.send("<h2>Sobre Rotas..</h2>");
});


router.get('/ola/:nome', function(req, res) {
  res.send("<h2>Olá, " + req.params.nome + "</h2>");
});


router.get('/imc', function(req, res) {
  let peso = req.query.peso;
  let estatura = req.query.estatura;

  let imc = peso / Math.pow(estatura, 2);
  let msg = "<h3> Seu IMC é: " +  imc.toFixed(2) + "</h3";
  res.send(msg);
});

//                    0                           1                    2
let autores = ["Miriam Leitão", "Ana Beatriz Silva Barbosa", "Stephen King"];
router.use(express.urlencoded({extended: true}));


router.get('/autores', function(req, res) {
    res.json(autores);
});


router.get('/autores/consulta/:id', function(req, res) {
  let id = req.params.id;
  res.json(autores[id]);
});


router.post('/autores/inclui/', function(req, res) {
  let nome = req.body.nome;
  autores.push(nome);
  res.json(autores);
});

module.exports = router;

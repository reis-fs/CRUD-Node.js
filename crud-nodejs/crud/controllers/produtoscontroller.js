var mysql = require('mysql');
var dateFormat = require('dateformat');

//Produtos controller

module.exports = {
    
  //função do controlador
  getProdutos : function(req, res, next){
    var config = require('.././database/config');
    
    var db = mysql.createConnection(config);
    db.connect();
    
    var produtos = null;
    
    db.query('SELECT * FROM produtos', function(err, rows, fields){
      if(err) throw err;           
      produtos = rows;
      db.end();

      res.render('produtos/produtos', {produtos : produtos});
    });   
  },

  getNewProduto : function(req, res, next){
    res.render('produtos/novo')
  },

  postNovoProduto : function(req, res, next){
    
    var dataAtual = new Date();
    var data = dateFormat(dataAtual, 'yyyy-mm-dd h:MM:ss');

    var produto = {
      nome: req.body.nome,
      preco: req.body.preco,
      estoque: req.body.estoque,
      data_criacao: data
    }

    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();

    db.query('INSERT INTO produtos SET ?', produto, function(err, rows, fields){
      if(err) throw err;
      db.end();
    });

    res.render('produtos/novo', {info : 'Produto cadastrado com sucesso'})
    //console.log(produto);
  },

  deletarProduto : function(req, res, next){
    var id = req.body.id;

    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();

    var resposta = {res: false};
    db.query('DELETE FROM produtos WHERE id_produto = ?', id, function(err, rows, fields){
      if (err) throw err;
      
      db.end();
      resposta.res = true;

      res.json(resposta);
    });
  },

  getModificarProduto : function(req, res, next){
    var id = req.params.id;
    
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();

    var produto = null;
    db.query('SELECT * FROM produtos WHERE id_produto = ?', id, function(err, rows, fields){
      if(err) throw err;

      produto = rows;
      db.end();

      res.render('produtos/modificar', {produto: produto})
    });
  },

  postModificarProduto : function(req, res, next){
    
    var produto = {
      nome: req.body.nome,
      preco: req.body.preco,
      estoque: req.body.estoque
    };

    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();

    db.query('UPDATE produtos SET ? WHERE ?', [produto, {id_produto: req.body.id_produto}], function(err, rows, fields){
      if(err) throw err;
      db.end();

      res.redirect('/produtos');
    });
  }
}
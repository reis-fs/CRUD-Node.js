//Home controller

module.exports = {

    //função do controlador

    index : function (req,res,next){
        res.render('index', {title : 'Bem vindo ao CRUD com Node.js'});
    }
}
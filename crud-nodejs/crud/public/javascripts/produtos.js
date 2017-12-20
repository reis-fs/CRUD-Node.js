$(function(){

    //função ajax deletar produto
    $('#tbl-produtos #btn-eliminar').click(function(e){
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#id_produto').text();

        var confirmar = confirm('Deseja deletar este produto?');

        if(confirmar){
            $.ajax({
                url: 'http://127.0.0.1:3000/deletarProduto',
                method: 'post',
                data: {id : id},
                success: function(res){
                    if(res.res){
                        elemento.parent().parent().remove();
                    }
                }
            });
        } 
    });
});
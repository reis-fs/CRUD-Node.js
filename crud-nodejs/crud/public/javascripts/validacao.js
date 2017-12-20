$(function () {
  $('.form-novoproduto form').form({
    nome: {
      identifier: 'nome',
      rules: [
        {
          type: 'empty',
          prompt: 'Por favor, digite o nome do produto'
        }
      ]
    },

    preco: {
      identifier: 'preco',
      rules: [
        {
          type: 'empty',
          prompt: 'Por favor, digite o preço do produto'
        },
        {
          type: 'number',
          prompt: 'O preço deve ser numérico'
        }
      ]
    },

    estoque: {
      identifier: 'estoque',
      rules:[
        {
          type: 'empty',
          prompt: 'Por favor, digite a quantidade'
        },
        {
          type: 'integer',
          prompt: 'A quantidade de estoque deve ser numero inteiro'
        }
      ]
    }
  });
});
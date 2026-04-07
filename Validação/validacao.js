$('#formExemplo').validate({
    debug: true,
    rules: {
      txtemail: {
        required: true,
        email: true,
      },
      txtnome: {
        required: true,
        rangelenght: [5, 50],
      },
      txtfilhos: {
        min: 0,
        max: 10,
        required: true,
      },
      txtsalario: {
        min: 2000,
        max: 5000,
        required: true,
      }, 
      txtdata: {
        min: 6,
        max: 6,
        required: true,
      },
      txtrede: {
        min: 5,
        max: 100,
        required: true,
      },
    },
    messages: {      
        txtnome: {
        required: 'nome obrigatório',
        minlength: 'exigido 5 caracteres',
        maxlength: 'até 100 caracteres',
      },
      txtemail: {
        required: 'E-mail obrigatorio',
        email: 'Formato invalido de email',
      },

      txtfilhos: {
        required: 'caso não tenha filhos digite 0',
        maxlength: 'valor maximo: 10',
      },
      txtsalario: {
        required: 'salario obrigatório',
        minlength: 'valor minimo: 2000',
        maxlength: 'valor maximo: 5000',
        },
      txtdata: {
        required: 'data obrigatória',
        minlength: 'valor invalido digite o formato correto',
        maxlength: 'valor invalido digite o formato correto',
        },
      txtrede: {
        required: 'Rede social obrigatória',
        }, 
    },
})
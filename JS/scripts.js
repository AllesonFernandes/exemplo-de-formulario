class validator{

    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }


    //iniciar a validação de todos os campos
    validate(form){

        //pegar todos os inputs
        let imputs = form.getElementsByTagName('input');


        //HTMLcollection -> array
        let inputsArray = [...inputsArray];

        //loop nos inputs e validação mediante ao que for mostrado
        inputsArray.forEach(function(input){
            
            //loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++){
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){

                    //limpando a string para virar um metóde
                    let method = this.validations[i].replace('data-','').replace('-','');

                    //valor do input
                    let value = input.getAttribute(this.validations[i]);

                    //invocar o método
                    this[method](input, value);

                    
                }
            }

        },this);

    }

    //verifica se um input tem um número mínimo de caracteres

    minlength(input, minValue){

        let inputlength = input.value.length;

        let errorMessage = 'O campo precisa ter pelo menos $(minValue) caracteres';

        if(inputlength < minValue){
            this.printMessage(input, errorMessage);
        }


    }
    //método para imprimir mensagem de erro na tela

    printMessage(input, msg){

        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let inputParent = input.ParentNode;

        template.classList.remove('template');

        inputParent.appendChild(template);

    }

}



let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let validator = new validator();
//evento que dispara as validações

submit.addEventListener('click', function(e){

e.preventDefault();

console.log('fucionou');

validator.validate(form);

});
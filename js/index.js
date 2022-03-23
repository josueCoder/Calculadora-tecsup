"use strict";

const documentReady=()=>{
    const txtNumero1=document.getElementById("txtNumero1");
    const txtNumero2=document.getElementById("txtNumero2");
    const operador=document.getElementById("operador");
    const btnCalcular=document.getElementById("btnCalcular");
    const contenedorResultado=document.getElementById("contenedorResultado");
    const contenedorError=document.getElementById("contenedorError");

    const calcular=()=>{
       const numero1=parseInt(txtNumero1.value);
       const numero2=parseInt(txtNumero2.value);


    

       if (isNaN(numero1)|| isNaN(numero2)) {
            contenedorError.innerHTML="Complete el Formulario";
            contenedorResultado.innerHTML="";
           
       }else{
            let resultado;
            contenedorError.innerHTML="";
            switch (operador.value) {
                case "+": resultado=numero1+numero2;
                    
                    break;
                case "-": resultado=numero1-numero2;
                    
                    break;
                case "*": resultado=numero1*numero2;
                    
                    break;    
                case "/": resultado=numero1/numero2;
                    
                    break;
                    
            
            }

            contenedorResultado.innerHTML=(resultado)

       }
       



     
    }
    
    btnCalcular.addEventListener("click",calcular);
    
   







}


document.addEventListener("DOMContentLoaded",documentReady);
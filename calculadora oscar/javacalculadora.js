let numero1= 0
let numero2= 0
let pantalla=document.getElementById("display")
let operacion=""


function appendToDisplay(value) {
    if(pantalla.value!=""){
        pantalla.value+=value

    }else{
        pantalla.value=value
    }

}

function operaciones(op){

    numero1=pantalla.value
    pantalla.value=""
    operacion=op

}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    numero2=pantalla.value
    if(operacion=="division"){
        pantalla.value=parseFloat(numero1)/parseFloat(numero2)
    }else if(operacion=="multiplicacion"){
        pantalla.value=parseFloat(numero1)*parseFloat(numero2)
    }else if(operacion=="resta"){
        pantalla.value=parseFloat(numero1)-parseFloat(numero2)
    }else{
        pantalla.value=parseFloat(numero1)+parseFloat(numero2)
    }
}


let numero1= 0
let numero2= 0
let resultado= 0
let pantalla=document.getElementById("resultado")
let operacion=0

function sumar(){
    numero1=pantalla.value pantalla.value="" operacion="suma"

}

function igual(){
    numero2=pantalla.value
    resultado= parseFloat(numero1)+parseFloat(numero2)
    pantalla.value=resultado

}

function n1(){
    if(pantalla.value==""){pantalla.value=1} else{pantalla.value=1}else {pantalla.value+=1}
    
}

function n2(){
    if(pantalla.value==""){pantalla.value=2} else{pantalla.value+=2}
    
}

function n3(){
    if(pantalla.value==""){pantalla.value=3} else{pantalla.value+=3}
    
}

function n4(){
    if(pantalla.value==""){pantalla.value=4} else{pantalla.value+=4}
    
}

function n5(){
    if(pantalla.value==""){pantalla.value=5} else{pantalla.value+=5}
    
}

function n6(){
    if(pantalla.value==""){pantalla.value=6} else{pantalla.value+=6}
    
}

function n7(){
    if(pantalla.value==""){pantalla.value=7} else{pantalla.value+=7}
    
}

function n8(){
    if(pantalla.value==""){pantalla.value=8} else{pantalla.value+=8}
    
}

function n9(){
    if(pantalla.value==""){pantalla.value=9} else{pantalla.value+=9}
    
}

function n0(){
    if(pantalla.value==""){pantalla.value=0} else{pantalla.value+=0}
    
}



function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}








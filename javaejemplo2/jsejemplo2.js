function sumar(a, b) {
return a+b;
}

let resultado = sumar(5, 3);
console.log(resultado); // Imprime 8


function sumar(){
    const numero1 = document.getElementById("numero1")
    const numero2 = document.getElementById("numero2")

    let valor1=numero1.value 
    let valor2=numero2.value
    
    let resultado = parseFloat(valor1) + parseFloat(valor2)
    document.getElementById("resultado").value= resultado

}
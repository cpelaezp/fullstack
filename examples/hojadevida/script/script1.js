//alert("Hola mundo");  
var salario= 0;


function valsalario(dias){
    return dias * (760000 / 30);
}

function sumar(valor){
    return salario - valor;
}
function descontar(descuento){
    return salario - descuento;
}


/* ----------------------- */

function calcular(){
	var felicitar = "", reganar = "";
    var dias = document.getElementById("dias").value;

    salario = valsalario(dias);

    var descuento =  document.getElementById("descuentos").value;

    

    salario = descontar(descuento);

    //alert("Pero al final, Salario de " + dias + " dias es " + salario);

    felicitar = "<hr>la estamos haciendo bien..<hr> Salario :" + salario + "<hr> Descuento: " + descuento + "<hr>";

    reganar = "no me quedo plata...";     

    if(salario > 500000)
        document.getElementById("error").innerHTML = felicitar;
    else    
        document.getElementById("error").innerHTML = reganar;
}
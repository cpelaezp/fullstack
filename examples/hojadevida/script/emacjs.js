function valida_edad(edad){
	if(edad < 18)
		abrirurl("https://www.eltiempo.com");
	else			
		abrirurl("https://www.yahoo.com");
}

function abrirurl(url){
	window.open(url,"_blank")
}

//valida_edad(15);

let person = { nombre:"yo", edad:14};

function valpersonedad(){

	if(person.edad > 18)
		document.write(`Es mayor de 18, tiene ${person.edad}`);
	else		
		document.write(`Es menor de 18, tiene ${person.edad}`);
}

function cssletra(estilo){
	var divcual = Math.floor((Math.random() * 4) + 1);
	var ele = document.getElementById("mensaje" + divcual);

	switch(estilo){
		case 1:
			ele.className = "div1";
			break;
		case 2:
			ele.className = "div2";
			break;
		case 3:
			ele.className = "div3";
			break;
		case 4:
			ele.className = "div4";
			break;
	}
}


function cambiardiv(){
	var divcount = Math.floor((Math.random() * 4) + 1);
	cssletra(divcount);
	setTimeout(cambiardiv, 10);
}
function callajas_javascript(){
	var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "ajax_info.txt", true);
    xmlhttp.send();	
}

function callajax_jaquey(){
	$.ajax({
	    url: "test.html",
	    context: document.body,
	    success: function(){
	      $(this).addClass("done");
	    }
	});	
}

function calljson(){
	$.getJSON("https://jsonplaceholder.typicode.com/todos/1", 
		function(result) { 
			$("#mensajejson").text(result.title);
		}
	);
}

function len(){
	var alto, ancho;

	alto = document.documentElement.clientHeight;
	ancho = document.documentElement.clientWidth;
	$("#mensaje").text(`adsas ${alto} ancho ${ancho}`);
}

function cambiarcss(){
	$(".")
}


var i = 0;
var txt = "mira este ejemplo";
var velocidad = 50;

function reming(){
	if(i < txt.length){
		document.getElementById("prueba").innerHTML += txt.charAt(i);
		//$("prueba").text().each(function(){ this.value += txt.charAt(i)});
		i++;
	}
	else {
		document.getElementById("prueba").innerHTML += "<br>";
		i = 0;
	}
	setTimeout(reming, velocidad);		
}

var jsonresult;
function remingjson(){
	var i = 0;
	var txt = "mira este ejemplo";
	var url = "https://newsapi.org/v2/top-headlines?country=co&language=es&apiKey=890ed3b022e44dedaae9d79d12a03426";

	$.ajax(
	{
		url: url,
		type: 'GET',
		success : function(res){
			jsonresult = res.articles;
			mostrarnoticia();
		}
	});
}

var velocidad2 = 5000;

function mostrarnoticia(){
	var numnoticia = Math.floor((Math.random() * 20) + 1);

	var htmlout = "";

	htmlout += "<table>";
	htmlout += `<tr><td>${numnoticia}</td><tr>
	            <tr><td>${jsonresult[numnoticia].author}</td><tr>
	            <tr><td>${jsonresult[numnoticia].content}</td><tr>
	            <tr><td>${jsonresult[numnoticia].description}</td>
	            <tr><td><img width="200" heidht="200" src='${jsonresult[numnoticia].urlToImage}'></td></tr>	
	            </tr>`;
	htmlout += "</table>";
	document.getElementById("pruebajson").innerHTML = htmlout;		
	i = 0;
	document.getElementById("prueba").innerHTML = "";
	setTimeout(mostrarnoticia, velocidad2);		

	remingPalabra(jsonresult[numnoticia].author);
}

var i = 0;
var velocidad3 = 500;

function remingPalabra(txt1){
	if(txt1 != null){
		if(i < txt1.length){
			document.getElementById("prueba").innerHTML += txt1.charAt(i);
			//$("prueba").text().each(function(){ this.value += txt.charAt(i)});
			i++;
			setTimeout(remingPalabra(txt1), velocidad3);
		}
	}		
}
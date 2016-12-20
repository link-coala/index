document.getElementById("p1").innerHTML = "bienvenido aventurero, este es el momento indicado para volver a a los sitios que siempre has conocido con las personas que ya has visto antes";
document.getElementById("p2").innerHTML = "decidir.";
document.getElementById("p3").innerHTML = "todo el conjunto de cosas que estas empezando a exprimentar y con lo que estas empezando a darte una respuesta a la pregunta de lo que se trata,por que es complicado entenderlo por que es conceptual, esto quiere decir que usa simbolos para referirse a otras cosas y intenta una nueva forma de trasmitir informacion como si hubiera sido escrito en otro planeta.";
document.getElementById("si").innerHTML = "irme";
document.getElementById("no").innerHTML = "quedarme";
document.getElementById("p4").innerHTML = "horario <br> de 7 a 11 de la manana";
$(document).ready(function(){
    $("a").mouseover(function(){
    $("#p2").removeClass("see");
    });
    $("a").mouseout(function(){
    $("#p2").addClass("see");
    });

$(".help").click(function(){$("#d1").addClass("hide");
$("#d2").removeClass("hide");});
$(".back").click(function(){$("#d1,h3").removeClass("hide");
$("#d2").addClass("hide");																																		
																											});
});

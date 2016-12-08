document.getElementById("p1").innerHTML = "bienvenido aventurero, este es el momento indicado para volver a a los sitios que siempre has conocido con las personas que ya has visto antes.";
document.getElementById("p2").innerHTML = "decidir!";
document.getElementById("si").innerHTML = "irme";
document.getElementById("no").innerHTML = "quedarme";

$(document).ready(function(){
    $("a").mouseover(function(){
    $("#p2").removeClass("see");
    });
    $("a").mouseout(function(){
    $("#p2").addClass("see");
    });
});
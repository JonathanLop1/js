window.onload = iniciar;
function iniciar(){
    let botonagregar = document.getElementById("botonagregar");
    botonagregar.addEventListener("click", clickbotonagrega);
}
function clickbotonagrega(){
    let ingresartexto = document.getElementById("ingresartexto");
    if(localStorage.getItem("notas")){
        let notas = localStorage.getItem("notas")
        notas += "<br>" + ingresartexto.value;
        localStorage.setItem("notas", notas);
    }else{
        localStorage.setItem("notas", ingresartexto.value);
    }
    mostrarnotas();
}
function mostrarnotas(){
    let nombres = document.getElementById("nombres");
    nombres.innerHTML = localStorage.getItem("notas") || " ";
}

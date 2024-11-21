function ver() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if (usuario == "TCM_1DS" && senha == "etesp") {
        window.open("https://www.youtube.com/watch?v=o-YBDTqX_ZU", "empty");
    } else {
        alert('usuario ou senha incorretos');
    }
}

var body = document.querySelector("body");

function corpo() {
    var p = document.getElementById("conteudo");
    if (p.style.display === "none" || p.style.display === "") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}


function abrir() {
    var p = document.getElementById("conteudo");
    if(p.style.display=="block"){
        p.style.display="none";
    }else{
        p.style.display="block";
    }
}
function esconde(lord) {
    document.getElementById("primeiro").src = lord;  
}

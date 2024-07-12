console.log("Conectado");

function eliminarCookies(){
    var cookies = document.querySelector(".cookies");
    console.log(cookies);
    cookies.remove();
}

function sumarLike(elemento){
    var numLikes = elemento.closest(".likes");
    console.log(numLikes);
    var numero = numLikes.querySelector(".like").innerHTML;
    console.log(numero);
    parseInt(numero);
    console.log(numero);
    numero++;
    console.log(numero);
    elemento.closest(".likes").querySelector(".like").innerHTML = numero;
}
/* 

Version de 3 lineas
function sumarLike(elemento){
    var numLikes = parseInt( elemento.closest(".likes").querySelector(".like").innerHTML );
    numLikes++;
    elemento.closest(".likes").querySelector(".like").innerHTML = numLikes;
}
    */
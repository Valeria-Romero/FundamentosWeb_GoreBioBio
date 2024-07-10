console.log("Conectado");

function buscar(){
    console.log("Entró a la función");
    var texto = document.querySelector("#texto").value;
    console.log(texto);
    alert("Estas buscando: " + texto);
}

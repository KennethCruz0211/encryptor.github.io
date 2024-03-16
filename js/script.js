const campoEntrada=document.getElementById("idTxtEntrada");
const campoSalida=document.getElementById("idTxtSalida");
const imgNoContent=document.getElementById("standby-paragraph");

const matriz_code = [
    ["e","enter"],//indice 0
    ["i","imes"],//indice 1
    ["a","ai"],//indice 2
    ["o","ober"],//indice 3
    ["u","ufat"],//indice 4s
];

function btnEncriptar(){
    const texto=encriptar(campoEntrada.value);
    campoSalida.value=texto;
    verifica();
}

function btnDesencriptar(){
    const texto=desencriptar(campoEntrada.value);
    campoSalida.value=texto;
    }

function encriptar(fraseEncriptada){
    
    for(let i = 0; i< matriz_code.length ; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
    
}

function desencriptar(fraseEncriptada){
    for(let i = 0; i< matriz_code.length ; i++){
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseEncriptada;
}
function verifica() {
    const texto = encriptar(campoEntrada.value);
    const noContentId = document.getElementById("no-content-id"); 
    const finalContentId = document.getElementById("final-content-id"); 
    if (texto === "") {
        noContentId.style.display = "block"; 
        finalContentId.style.display = "none"; 
    } else {
        noContentId.style.display = "none"; 
        finalContentId.style.display = "block"; 
    }
}
function copiarTexto() {
    const textarea = document.getElementById("idTxtSalida");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado al portapapeles");
}
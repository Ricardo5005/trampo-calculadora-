const resultado= document.querySelector(".result")
const confirmar=document.querySelector(".igual")

function insert(valor){
    resultado.innerHTML=resultado.innerHTML+valor
}

function clean(){
    resultado.innerHTML=""
}
function deleta1(){
    if(resultado.textContent){
     let caracterCapiturado = document.getElementById('resultado').innerHTML 
     resultado.innerHTML=caracterCapiturado.substring(0, caracterCapiturado.length -1) 
    }
}
function executar(){
    document.getElementById('resultado').innerHTML =eval(resultado.innerHTML) 
}

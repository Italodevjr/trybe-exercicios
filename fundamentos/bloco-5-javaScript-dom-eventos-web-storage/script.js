
function corDeFundo() {
    let select = document.querySelector('#geral');
    let container = document.querySelector('.container')

    select.addEventListener("change", function (color) {
        color = select.value;
        container.style.backgroundColor = color
        localStorage.setItem("background", color)
    })

    let saved = localStorage.getItem("background")
   container.style.backgroundColor = saved
}

corDeFundo()


let textoP = document.querySelector (".textoP")
function corTexto (){

let texto = document.querySelector ("#texto")
    texto.addEventListener("change", function (color){
        color = texto.value;
        textoP.style.color = color;
        localStorage.setItem("corTexto", color)
    })

    let textoSaved = localStorage.getItem("corTexto")
    textoP.style.color = textoSaved;
}

corTexto()

function tamanhoSize (){
    let font = document.querySelector ("#font")
    
    font.addEventListener("change", function(size){
        size = font.value;
        textoP.style.fontSize = size
        localStorage.setItem("tamanho", size)
    }) 

    let tamanhoSalved = localStorage.getItem("tamanho")
    textoP.style.fontSize = tamanhoSalved
}

tamanhoSize()

function espacoLine (){

    let espaco = document.querySelector ("#espaco")
    espaco.addEventListener("change", function(line){
        line = espaco.value;
        textoP.style.lineHeight = line
        localStorage.setItem("espacoLine", line)
    }) 

    let tamanhoSalved = localStorage.getItem("espacoLine")
    textoP.style.lineHeight = tamanhoSalved
}

espacoLine()

function clear (){
let clear = document.querySelector("#clear")

clear.addEventListener("click", function (){
    return localStorage.clear()  
})

}
clear()

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


function corTexto (){

let texto = document.querySelector ("#texto")
let textoP = document.querySelector (".textoP")
    texto.addEventListener("change", function (color){
        color = texto.value;
        textoP.style.color = color;
        localStorage.setItem("corTexto", color)
    })

    let textoSaved = localStorage.getItem("corTexto")
    textoP.style.color = textoSaved;
}

corTexto()
var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samanntha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolaParaDireita(){
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top: 60px"
}
function RolaParaEsquerda(){
    Leonardo.style ="display: flex"
    Bruna.style ="display: none"
    setaDireita.style = "display:flex; margin-top: 60px"
    setaEsquerda.style = "display:none"
}
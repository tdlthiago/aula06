/*document.getElementById('exmplo')

//selecionando classes
document.getElementsByClassName('lista')
//selecionando TAGS
document.getElementsByTagName('button')
//selecionando qualquer elemento
document.querySelector('#exemplo')

*/

//innertext troca o texto
/*
document.querySelector("#exemplo").innerText = "curso técnico"
// innerHTML troca o texto com tag html
document.querySelector('button').innerHTML="<h1>clique aqui</h1>"
//CAPTANDO O VALOR DE ENTRADA
document.querySelector('input').value  */


function clicou(){
    document.querySelector('.quadrado').innerHTML="clicou aqui"
}
function entrou(){
    document.querySelector('.quadrado').innerText="passou o mouse"
}

function saiu(){
    document.querySelector('.quadrado').innerHTML="tirou o mouse"
}
    
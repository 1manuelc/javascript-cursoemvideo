var agora = new Date();
var hora = agora.getHours();
var min = agora.getMinutes();
var saida = document.querySelector("div#saida")

saida.innerHTML = `<p>Agora são exatamente ${hora}:${min}h</p>`

if(hora < 5)
    fundo.style.backgroundColor = white
else if(hora < 12)
    console.log("Bom dia!")
else if(hora <= 18)
    console.log("Boa tarde!")
else if(hora < 24)
    console.log("Boa noite!")
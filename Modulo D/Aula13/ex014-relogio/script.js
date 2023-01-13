function carregar() {
    var agora = new Date();
    var hora = agora.getHours();
    var min = agora.getMinutes();

    var fundo = document.getElementById("bg")
    var msg = document.getElementById("msg")
    var foto = document.getElementById("foto")

    msg.innerHTML = `${hora}:${min}h,   `

    if(hora < 5) {
        msg.innerHTML += "Boa madrugada!";
        fundo.style.backgroundColor = "#06122a";
        foto.innerHTML = "<img src='source/noite.png' alt='foto-noite'>"

    } else if(hora < 12) {
        msg.innerHTML += "Bom dia!";
        fundo.style.backgroundColor = "#b29f42";
        foto.innerHTML = "<img src='source/manha.png' alt='foto-manha'>"

    } else if(hora <= 18) {
        msg.innerHTML += "Boa tarde!";
        fundo.style.backgroundColor = "#8e570b";
        foto.innerHTML = "<img src='source/tarde.png' alt='foto-tarde'>"

    } else if(hora < 24) {
        msg.innerHTML += "Boa noite!";
        fundo.style.backgroundColor = "#081839";
        foto.innerHTML = "<img src='source/noite.png' alt='foto-noite'>"
    }
}
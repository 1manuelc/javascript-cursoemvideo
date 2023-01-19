function contar() {
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var res = document.querySelector("div#res")

    if (ini.value == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert("Passo inválido\nConsiderando passo = 1")
            p = 1;
        }

        if (f > i) { // Contagem crescente 
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `

                if (c != f)
                    res.innerHTML += "\u{1F449} "

            } res.innerHTML += "\u{1F3C1}"

        } else { // Contagem regressiva

            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `

                if (c != f)
                    res.innerHTML += "\u{1F449} "

            } res.innerHTML += "\u{1F3C1}"
        }
    }
}
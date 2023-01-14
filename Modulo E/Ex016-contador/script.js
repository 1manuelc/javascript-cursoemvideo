function contar() {
    var txtInicio = document.getElementById("inicio")
    var txtPasso = document.getElementById("passo")
    var txtFim = document.getElementById("fim")

    var inicio = Number(txtInicio.value)
    var passo = Number(txtPasso.value)
    var fim = Number(txtFim.value)

    var res = document.getElementById("res")

    for (var c = inicio; inicio < fim; c += passo) {
        res.innerHTML += `<p>${c}</p>`
    }
}
// Valor invalido (fora do range ou vazio) ou ja adicionado na lista

// Qtd de numeros cadastrados
// Maior valor
// Menor valor
// Soma dos valores
// Media dos valores

let vetor = [,]

let adicionar = (vetor) => {
    let txtNum = document.getElementById("txtnum")
    let num = Number(txtNum.value)
    let sel = document.getElementById("seltab")

    if (num < 1 ||
        num > 100 ||
        num.length == 0 ||
        vetor.indexOf(num) != -1)
        window.alert("Valor inválido ou já adicionado na lista!")
    else {
        vetor.push(num)

        let item = document.createElement("option")
        item.text = `Valor ${num} adicionado`
        sel.appendChild(item)
    }
}
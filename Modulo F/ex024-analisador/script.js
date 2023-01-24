
let vetor = []

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
        let res = document.getElementById("res")
        res.innerHTML = ''

        let item = document.createElement("option")
        item.text = `Valor ${num} adicionado`
        sel.appendChild(item)
    }
    // Numero adicionado ou nao
    txtNum.value = '' // Esvazia a caixa de texto
    txtNum.focus() // Foca na caixa de texto
}

let finalizar = (vetor) => {
    if (vetor.length == 0)
        window.alert("Adicione valores antes de finalizar!")
    else {
        let res = document.getElementById("res")
        res.innerHTML = `Ao todo, temos ${vetor.length} números cadastrados<br><br>`
        res.innerHTML += `O maior valor informado foi ${maiorValor(vetor)}<br><br>`
        res.innerHTML += `O menor valor informado foi ${menorValor(vetor, 100)}<br><br>`
        res.innerHTML += `Somando todos os valores, temos ${somarTudo(vetor)}<br><br>`
        res.innerHTML += `A média dos valores digitados é ${media(vetor.length, somarTudo(vetor))}`
    }
}

let maiorValor = (vetor) => {
    let maior = 0;
    for (let i in vetor) {
        if (vetor[i] > maior)
            maior = vetor[i]
    } return maior
}

let menorValor = (vetor, menor) => {
    for (let i in vetor) {
        if (vetor[i] < menor)
            menor = vetor[i]
    } return menor
}

let somarTudo = (vetor) => {
    let soma = 0
    for (let i in vetor)
        soma += vetor[i]
    return soma
}

let media = (tamanho, soma) => {
    let media = soma / tamanho
    return media
}
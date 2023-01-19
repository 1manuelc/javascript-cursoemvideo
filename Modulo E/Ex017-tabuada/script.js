function tabuada() {
    var txtNum = document.getElementById("txtnum")
    var num = Number(txtNum.value)

    if (txtNum.value.length == 0) {
        window.alert("ERRO: Digite um número válido para gerar a tabuada")
    } else {
        var tab = document.getElementById("seltab")
        var c = 1;

        tab.innerHTML = ''                              // limpa toda a tabuada pre existente
        
        do {
            var item = document.createElement("option") // cria um option
            item.text = `${num} x ${c} = ${num * c}`    // coloca a tabuada atual dentro de option
            item.value = `tab${c}`                      // define um atributo value para a tabuada atual
            tab.appendChild(item)                       // torna o option child de select
            c++;                                        // incrementa a tabuada atual
        } while (c <= 10)
    }
}
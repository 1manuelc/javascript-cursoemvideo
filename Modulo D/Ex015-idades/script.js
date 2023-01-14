function verificar() {
    var data = new Date();
    var ano = data.getFullYear();

    var txtanoForm = document.getElementById("ano-nasc")

    var res = document.querySelector("div.res")

    if (Number(txtanoForm.value.length) == 0 || Number(txtanoForm.value) > ano)
        window.alert("Verifique os dados e tente novamente") // validacao de idade invalida
    else {
        var radsex = document.getElementsByName("radsex")
        var idade = ano - Number(txtanoForm.value)

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''
        if (radsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'sources/foto-bebe-m.png')
                img.setAttribute('alt', 'foto-bebe-m')
            } else if (idade < 21) {
                img.setAttribute('src', 'sources/foto-jovem-m.png')
                img.setAttribute('alt', 'foto-jovem-m')
            } else if (idade < 50) {
                img.setAttribute('src', 'sources/foto-adulto-m.png')
                img.setAttribute('alt', 'foto-adulto-m')
            } else {
                img.setAttribute('src', 'sources/foto-idoso-m.png')
                img.setAttribute('alt', 'foto-adulto-m')
            }
        }
        if (radsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'sources/foto-bebe-f.png')
                img.setAttribute('alt', 'foto-bebe-f')
            } else if (idade < 21) {
                img.setAttribute('src', 'sources/foto-jovem-f.png')
                img.setAttribute('alt', 'foto-jovem-m')
            } else if (idade < 50) {
                img.setAttribute('src', 'sources/foto-adulto-f.png')
                img.setAttribute('alt', 'foto-adulto-m')
            } else {
                img.setAttribute('src', 'sources/foto-idoso-f.png')
                img.setAttribute('alt', 'foto-idoso-m')
            }
        }

        if (genero == 'Homem') {
            if (idade == 1)
                res.innerHTML = `<p>Detectado homem de ${idade} ano.</p>`
            else
                res.innerHTML = `<p>Detectado homem de ${idade} anos.</p>`
        } else {
            if (idade == 1)
                res.innerHTML = `<p>Detectada mulher de ${idade} ano.</p>`
            else
                res.innerHTML = `<p>Detectada mulher de ${idade} anos.</p>`
        }
        res.appendChild(img)

    }
}
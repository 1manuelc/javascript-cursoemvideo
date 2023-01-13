var idade = 71
console.log(`Você tem ${idade} anos`)

if(idade < 16)
    console.log("Não vota")
else if(idade < 18)
    console.log("Voto opcional")
else if(idade <= 70)
    console.log("Voto obrigatório")
else
    console.log("Voto opcional")

/*  Se tiver < 16 = Não vota
    Se não, (se tiver > 16) e < 18 = voto opcional
    Se não, (se tiver > 18) e <= 70 = voto obrigatório
    Se não, (se tiver > 70) = voto opcional
*/

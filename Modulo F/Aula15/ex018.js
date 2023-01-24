let num = []

num.sort()

// Forma padrao de exibir um vetor
console.log(num)

/*
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)
*/

// Outra forma de exibir o vetor
/* for(var i = 0; i < num.length; i++)
    console.log(`num[${i}] = ${num[i]}`)
*/

// For simplificado, so funciona para arrays e objetos
/* for(let pos in num) // para cada posição no vetor
    console.log(`num[${pos}] = ${num[pos]}`)
*/

let pos = num.indexOf(21)
if(pos == -1)
    console.log("Valor não encontrado!")
else
    console.log(`Valor na posição ${pos}`)
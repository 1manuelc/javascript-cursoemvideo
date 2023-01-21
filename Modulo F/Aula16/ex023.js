/*
    RECURSIVIDADE
    5! = 5 * 4 * 3 * 2 * 1
    5! = 5 * 4!
    ...
*/

// Caso base = 1
// Recursao vai diminuir 1 de n ate achar o caso base
// Apos achar o caso base saira multiplicando o que achou
let fatorial = (n) => {
    if(n == 1)
        return 1
    else
        return n * fatorial(n - 1)
}

console.log(fatorial(7))
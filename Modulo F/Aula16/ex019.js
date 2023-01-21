function parimp(n) {
    if(n % 2 == 0)
        return "par"
    else
        return "ímpar"
}

parimp(5) // -> não faz nada com o retorno da Função
let res = parimp(5) // -> guarda-se o retorno
/* OU */ console.log(parimp(5))
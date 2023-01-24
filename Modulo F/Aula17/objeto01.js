let amigo = {
    nome:"José",
    sexo:"M",
    peso:85.4,
    engordar(p = 0){
        //bloco do metodo engordar dentro de amigo
        console.log("Engordou")
        this.peso += p
    }
}

// console.log(typeof amigo) --> object
// --> um array é um objeto, e um objeto é um objeto, são de mesma origem

// console.log(amigo)       --> exibição do objeto
// console.log(amigo.nome)  --> exibição de campo
amigo.engordar(2)        //--> funcao interna
console.log(`O amigo ${amigo.nome} pesa ${amigo.peso}kg`)
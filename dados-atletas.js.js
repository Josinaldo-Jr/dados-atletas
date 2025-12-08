class Atleta {

    constructor (nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        let categoria;

        if(idade >= 9 && idade <= 11) {
            categoria = "Infantil"
            console.log(categoria);
        }
    }

}
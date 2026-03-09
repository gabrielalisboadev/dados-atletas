class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Categoria: Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Categoria: Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Categoria: Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Categoria: Adulto";
    } else {
      return "Categoria: Sem categoria";
    };
  };
  calculaIMC() {

  }
  calculaMediaValida() {

  }
  obtemNomeAtleta() {

  }
  obtemIdadeAtleta() {

  }
  obtemIdadeAtleta() {

  }
  obtemPesoAtleta() {

  }
  obtemNotasAtleta() {

  }
  obtemCategoria() {

  }
  obtemIMC() {

  }
  obtemMediaValida() {

  }
}
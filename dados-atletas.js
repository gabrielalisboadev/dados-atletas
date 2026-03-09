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
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  };
  calculaIMC() {
    let imc = this.peso / Math.pow(this.altura, 2);
    return `IMC: ${imc}`;
  };
  calculaMediaValida() {
    //Ordenando as notas do atleta
    this.notas = this.notas.sort((a, b) => a - b);

    //Tirando a primeira e a última notas do array de notas ordenado
    let notasValidas = this.notas.slice(1, 4);

    //Somando as notas
    let soma = 0;
    notasValidas.forEach(function (nota) {
      soma = soma + nota;
      return soma;
    });

    // Calculando a média das notas de cada atleta
    let media = soma / notasValidas.length;
    return media;
  };
  obtemNomeAtleta() {
    return this.nome;
  };
  obtemIdadeAtleta() {
    return this.idade;
  };
  
  obtemPesoAtleta() {
    return this.peso;
  };

  obtemAltura() {
    return this.altura
  }

  obtemNotasAtleta() {
    return this.notas;
  };
  obtemCategoria() {
    return this.calculaCategoria()
  };
  obtemIMC() {
    return this.calculaIMC()
  };
  obtemMediaValida() {
    return this.calculaMediaValida()
  };
};

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

    console.log(atleta);
    

// Exibe os resultados
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAltura()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Media válida: ${atleta.obtemMediaValida()}`);








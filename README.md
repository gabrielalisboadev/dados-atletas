# 🏅 Projeto: Cadastro e Avaliação de Atletas em JavaScript

## 📌 Descrição do Projeto

Este projeto foi desenvolvido em **JavaScript** com o objetivo de criar uma aplicação capaz de **receber informações de um atleta**, realizar **cálculos automáticos** e exibir os resultados ao usuário.

A aplicação utiliza **Programação Orientada a Objetos (POO)** para organizar os dados e comportamentos dentro de uma classe chamada **Atleta**.

A partir das informações fornecidas, o sistema calcula:

- Categoria do atleta
- IMC (Índice de Massa Corporal)
- Média válida das notas recebidas

Esse projeto tem como objetivo exercitar conceitos fundamentais de **JavaScript**, como:

- Classes
- Métodos
- Manipulação de arrays
- Cálculos matemáticos
- Estrutura lógica

---

# 🧠 Conceitos Aplicados

Durante o desenvolvimento deste projeto foram aplicados os seguintes conceitos:

- Programação Orientada a Objetos (POO)
- Criação de classes em JavaScript
- Métodos de instância
- Manipulação de arrays
- Estruturas condicionais
- Cálculo de média e IMC

---

# 🏗 Estrutura da Classe

A aplicação possui uma classe chamada **Atleta**, responsável por armazenar os dados e realizar os cálculos necessários.

## Atributos

A classe recebe os seguintes atributos:

- **nome** → Nome do atleta
- **idade** → Idade do atleta
- **peso** → Peso do atleta (kg)
- **altura** → Altura do atleta (metros)
- **notas** → Array contendo as notas do atleta

Exemplo:

```javascript
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.7, [10, 9.34, 8.42, 10, 7.88]);
```

---

# ⚙️ Métodos da Classe

A classe possui os seguintes métodos:

### calculaCategoria()

Responsável por calcular a **categoria do atleta** com base na idade.

| Idade   | Categoria     |
| ------- | ------------- |
| 9 a 11  | Infantil      |
| 12 a 13 | Juvenil       |
| 14 a 15 | Intermediário |
| 16 a 30 | Adulto        |
| Outros  | Sem categoria |

---

### calculaIMC()

Calcula o **Índice de Massa Corporal (IMC)** utilizando a fórmula:

```
IMC = peso / (altura × altura)
```

Exemplo:

```
IMC = 80 / (1.70 × 1.70)
```

---

### calculaMediaValida()

Calcula a **média válida das notas**.

O método utiliza a mesma metodologia do **Projeto de Certificação 1**, onde:

1. As notas são ordenadas
2. A **maior** e a **menor** nota são removidas
3. A média é calculada com as notas restantes

---

# 📥 Métodos de Obtenção de Dados

A classe também possui métodos responsáveis por retornar as informações do atleta:

- `obtemNomeAtleta()` → Retorna o nome do atleta
- `obtemIdadeAtleta()` → Retorna a idade
- `obtemPesoAtleta()` → Retorna o peso
- `obtemNotasAtleta()` → Retorna as notas
- `obtemCategoria()` → Retorna a categoria
- `obtemIMC()` → Retorna o IMC
- `obtemMediaValida()` → Retorna a média válida

---

# ▶️ Exemplo de Uso

```javascript
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.7, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.altura);
console.log("Notas:", atleta.obtemNotasAtleta());
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());
```

---

# 📊 Exemplo de Saída

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.25333333
```

---

# 🚀 Como Executar o Projeto

1️⃣ Instale o **Node.js** (caso ainda não tenha instalado).

2️⃣ Clone este repositório:

```
git clone https://github.com/seu-usuario/dados-atletas.git
```

3️⃣ Acesse a pasta do projeto:

```
cd nome-do-projeto
```

4️⃣ Execute o arquivo JavaScript:

```
node dados-atletas.js
```

---

# 👩‍💻 Desenvolvido por

**Gabriela Lisboa**

Estudante do curso **DEVstart**.

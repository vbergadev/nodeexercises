// caso queira usar o readLine reinstale o pacote npm install readline-sync
// const readline = require("readline-sync");
const inquire = require("inquirer");

function numberValidation(input) {
  return !isNaN(parseFloat(input)) || "Digite numeros validos";
}

async function calculaImc() {
  //   const peso = readline.questionFloat("Qual o seu peso (kg)? ").toFixed(2);
  //   const altura = readline.questionFloat("Qual sua altura (m)? ").toFixed(2);
  const answers = await inquire.prompt([
    {
      name: "peso",
      type: "input",
      message: "Qual o seu peso?",
      validate: numberValidation,
    },
    {
      name: "altura",
      type: "input",
      message: "Qual a sua altura?",
      validate: numberValidation,
    },
  ]);
  const peso = parseFloat(answers.peso);
  const altura = parseFloat(answers.altura);
  console.log("Peso: %s, altura: %s", peso, altura);

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  if (imc < 18.5) {
    console.log("Abaixo do peso (magreza)");
  }

  if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
  }
  if (imc >= 24.9 && imc <= 29.9) {
    console.log("Acima do peso (sobrepeso)");
  }

  if (imc > 29.9 && imc <= 34.9) {
    console.log("Obesidade grau I");
  }

  if (imc > 34.9 && imc <= 39.9) {
    console.log("Obesidade grau II");
  }

  if (imc > 39.9) {
    console.log("Obesidade graus III e IV");
  }
}

calculaImc();

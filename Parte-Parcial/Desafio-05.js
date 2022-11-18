  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Digite 3 Números'!")
  
  // Pedir números
  let firstNumber = parseFloat(
    prompt("Digite o 1º de 3 números")
  )
  let secondNumber = parseFloat(
    prompt("Digite o 2º de 3 números")
  )
  let thirdNumber = parseFloat(
    prompt("Digite o 3º de 3 números")
  )

  /* Expressão de repetição caso "firstNumber","secondNumber" e "thirdNumber" forem
  diferentes de um número */
  while (
    (!firstNumber && firstNumber != 0) ||
    (!secondNumber && secondNumber != 0) ||
    (!thirdNumber && thirdNumber != 0)
  ) {
    alert("Opção inválida!");

    firstNumber = parseFloat(
      prompt("Digite o 1º de 3 números")
    );
    secondNumber = parseFloat(
      prompt("Digite o 2º de 3 números")
    );
    thirdNumber = parseFloat(
      prompt("Digite o 3º de 3 números")
    );
  }

  /* Expressões condicionais para vericar "firstNumber", "secondNumber" e
  "thirdNumber" */
      if(firstNumber < secondNumber) {
        if (firstNumber < thirdNumber) {
          alert(`O primeiro número(${firstNumber}) é o menor entre os 3 números!`);
        }
      } else if (secondNumber < thirdNumber) {
        alert(`O segundo número(${secondNumber}) é o menor entre os 3 números!`);
      } else {
        alert(`O terceiro número(${thirdNumber}) é o menor entre os 3 números!`);
      }

  // Cálculo da média
  let mediaNumber = (firstNumber + secondNumber + thirdNumber)/3;

  // Mostrar a média
  alert(`${mediaNumber.toFixed(2)} é a média entre os 3 números!`)
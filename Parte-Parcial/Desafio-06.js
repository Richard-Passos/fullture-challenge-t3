  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Cálculos Básicos'!")

  // Pedir números
  let firstNumber = parseFloat(
    prompt("Digite o 1º de 2 números")
  )
  let secondNumber = parseFloat(
    prompt("Digite o 2º de 2 números")
  )

  /* Expressão de repetição caso "firstNumber" e "secondNumber" forem
  diferentes de um número */
  while (
    (!firstNumber && firstNumber != 0) ||
    (!secondNumber && secondNumber != 0)
  ) {
    alert("Opção inválida!");

    firstNumber = parseFloat(
      prompt("Digite o 1º de 2 números")
    );
    secondNumber = parseFloat(
      prompt("Digite o 2º de 2 números")
    );
  }

  // Imprimir operações básicas
  alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
  alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
  alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
  alert(`${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}`);
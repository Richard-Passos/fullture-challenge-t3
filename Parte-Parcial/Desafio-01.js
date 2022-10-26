  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Positivo ou Negativo'!")
  
  // Pedir número
  let digitedNumber = parseFloat(
    prompt("Digite um número POSITIVO ou NEGATIVO ( . no lugar de , )")
  );

  /* Expressão de repetição caso "digitedNumber" for diferente de um número positivo
  ou negativo */
  while (!digitedNumber) {
    if(digitedNumber == 0) {
      alert(`${digitedNumber} é neutro`) 
    } else {
      alert("Opção inválida!");
    }

    digitedNumber = parseFloat(
      prompt("Digite um número POSITIVO ou NEGATIVO ( . no lugar de , )")
    );
  }

  // Expressões condicionais para vericar o "digitedNumber"
  if (digitedNumber > 0) {
    let positiveNumber = digitedNumber;
    alert(`O número ${positiveNumber} é positivo`);
  } else {
    let negativeNumber = digitedNumber;
    alert(`O número ${negativeNumber} é negativo`);
  }

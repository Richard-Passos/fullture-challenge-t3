  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Digite um Número'!")
  
  // Pedir número
  let digitedNumber = parseFloat(
    prompt("Digite um número")
  )
  
  // Expressão de repetição caso "digitedNumber" for diferente de um número
  while(!digitedNumber && digitedNumber != 0) {
    alert("Opção inválida!")
    
    digitedNumber = parseFloat(
      prompt("Digite um número")
    );
  }

  // Expressões condicionais ternárias para vericar "digitedNumber"
  (digitedNumber > 100)? alert(digitedNumber): alert((digitedNumber = 0))
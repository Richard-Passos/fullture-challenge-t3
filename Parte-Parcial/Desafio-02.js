  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Par ou Ímpar'!")
  
  // Pedir número
  let digitedNumber = parseFloat(
    prompt("Digite um número para verificar se é PAR ou ÍMPAR")
  )

  // Expressão de repetição caso "digitedNumber" for diferente de um número
  while(!digitedNumber && digitedNumber != 0) {
    alert("Opção inválida!")
    
    digitedNumber = parseFloat(
      prompt("Digite um número para verificar se é PAR ou ÍMPAR")
    );
  }

  // Expressões condicionais ternárias para vericar o "digitedNumber"
  (digitedNumber % 2) == 0? alert(`${digitedNumber} é par`):
  alert(`${digitedNumber} é ímpar`)

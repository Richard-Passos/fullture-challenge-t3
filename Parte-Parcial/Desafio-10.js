  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Desconto Relâmpago'!");

  // Pedir números
  let previousPrice = (parseFloat(prompt("Digite o preço ANTERIOR (> 0)")) * 0.9);
  let currentPrice = (parseFloat(prompt("Digite o preço ATUAL (> 0)")) * 0.9);

  /* Expressão de repetição caso "previousPrice" e "currentPrice" forem diferentes 
  de um número */
  while (
    (!previousPrice && previousPrice != 0) ||
    (!currentPrice && currentPrice != 0)
  ) {
    alert("Opção inválida!");

    previousPrice = (parseFloat(prompt("Digite o preço ANTERIOR (> 0)")) * 0.9);
    currentPrice = (parseFloat(prompt("Digite o preço ATUAL (> 0)")) * 0.9);
  }

  // Imprimir desconto
  alert(`Preço Final: ${(previousPrice + currentPrice)/2}`)

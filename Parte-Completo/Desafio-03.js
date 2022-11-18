  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Reabastecer ou Não?'!\n");

  let inStock = parseFloat(prompt("Digite a quantidade do produto em estoque: "));
  let maxToStock = parseFloat(
    prompt("Digite a quantidade MÁXIMA do produto que se pode ter em estoque: ")
  );
  let minToStock = parseFloat(
    prompt("Digite a quantidade MÍNIMA do produto que se pode ter em estoque: ")
  );

  while (
    (!inStock && inStock != 0) ||
    (!maxToStock && maxToStock != 0) ||
    (!minToStock && minToStock != 0)
  ) {
    console.log("\nAlguma opção inválida!\n");

    inStock = parseFloat(prompt("Digite a quantidade do produto em estoque: "));
    maxToStock = parseFloat(
      prompt("Digite a quantidade MÁXIMA do produto que se pode ter em estoque: ")
    );
    minToStock = parseFloat(
      prompt("Digite a quantidade MÍNIMA do produto que se pode ter em estoque: ")
    );
  }

  let mediaToStock = (maxToStock - minToStock) / 2;

  (inStock >= mediaToStock)
    ? console.log("\nNão efetuar compra!\n")
    : console.log("\nEfetuar compra!\n");

  // Agradecimento
  console.log("Obrigado por participar!! :D");

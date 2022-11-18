  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Custo Final do Carro ao Consumidor'!\n");

  let factoryPrice = parseFloat(prompt("Digite o preço de fábrica do carro: "));

  while (!factoryPrice) {
    factoryPrice == 0
      ? console.log(`\nO carro está saindo de graça!!! :D\n`)
      : console.log("\nOpção inválida!\n");

    factoryPrice = parseFloat(prompt("Digite o preço de fábrica do carro: "));
  }

  console.log(`\nO preço final é: ${factoryPrice * 1.73}\n`);

  // Agradecimento
  console.log("Obrigado por participar!! :D");

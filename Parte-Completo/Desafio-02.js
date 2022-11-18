  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Calcular salário'!\n");

  let fixedSalary = parseFloat(
    prompt("Digite seu salário fixo ( . no lugar de , ): ")
  );
  let numberOfSoldCars = parseFloat(
    prompt("Digite a quantidade de carros que você vendeu: ")
  );
  let percentByCar = parseFloat(
    prompt(
      "Digite a porcentagem ganha por carro vendido ( somente o número :D ): "
    )
  );
  let totalSalesValue = parseFloat(
    prompt("Digite o seu valor total de vendas ( . no lugar de , ): ")
  );

  while (
    (!fixedSalary && fixedSalary != 0) ||
    (!numberOfSoldCars && numberOfSoldCars != 0) ||
    (!percentByCar && percentByCar != 0) ||
    (!totalSalesValue && totalSalesValue != 0)
  ) {
    console.log("\nAlguma opção inválida!\n");

    fixedSalary = parseFloat(
      prompt("Digite seu salário fixo ( . no lugar de , ): ")
    );
    numberOfSoldCars = parseFloat(
      prompt("Digite a quantidade de carros que você vendeu: ")
    );
    percentByCar = parseFloat(
      prompt(
        "Digite a porcentagem ganha por carro vendido ( somente o número :D ): "
      )
    );
    totalSalesValue = parseFloat(
      prompt("Digite o seu valor total de vendas ( . no lugar de , ): ")
    );
  }

  let finalSalary =
    fixedSalary +
    (numberOfSoldCars * (percentByCar / 100) + totalSalesValue * 0.05);

  console.log(`\nEste é o seu salário final: $${finalSalary}\n`);

  // Agradecimento
  console.log("Obrigado por participar!! :D");

  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Números'!\n");

  let numbers = [];

  for (let i = 0; i < 5; i++) {
    let number = prompt(`Digite o ${i + 1}º número de 5: `);

    while (!number) {
      console.log("\nOpção inválida!\n");

      number = prompt(`Digite o ${i + 1}º número de 5: `);
    }

    numbers.push(number);
  }

  let shorterNumber = numbers[0];
  let greaterNumber = 0;
  let sumOfNumbers = 0;

  numbers.forEach((number) => {
    if (shorterNumber > number) shorterNumber = number;
    if (greaterNumber < number) greaterNumber = number;
    sumOfNumbers += parseFloat(number);
  });

  console.log(
    `\nMenor número: ${shorterNumber}
      \nMaior número: ${greaterNumber}
      \nSoma dos números: ${sumOfNumbers}\n`
  );

  // Agradecimento
  console.log("Obrigado por participar!! :D");

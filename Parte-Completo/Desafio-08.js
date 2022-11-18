  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Achar Nome'!\n");

  let names = [];

  for (let i = 0; i < 10; i++) {
    let name = prompt(`Digite o ${i + 1}º nome de 10: `);

    names.push(name.toUpperCase());
  }
  console.table(names);

  const nameToFind = prompt("Digite o nome que deseja achar: ");

  const tryToFind = names.find(name => name == nameToFind.toUpperCase());

  !tryToFind ? console.log("\nNÃO ACHEI!\n") : console.log("\nACHEI!\n");

  // Agradecimento
  console.log("Obrigado por participar!! :D");

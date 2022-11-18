  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Desligar todos os grupos?'!\n");

  let pollutionIndex = parseFloat(
    prompt("Digite o índice de poluição ( . no lugar de , ): ")
  );  
  while (!pollutionIndex && pollutionIndex != 0) {
    console.log("\nOpção inválida!\n");

    pollutionIndex = parseFloat(
      prompt("Digite o índice de poluição: ")
    );
  }

  pollutionIndex >= 0.5
    ? console.log(
        "\nTodos os grupos devem ser notificados a paralisarem suas atividades\n"
      )
    : pollutionIndex >= 0.4
    ? console.log(
        "\nAs industrias do 1º e 2º grupo devem ser intimadas a suspenderem suas atividades\n"
      )
    : pollutionIndex >= 0.3
    ? console.log(
        "\nAs indústrias do 1º grupo devem ser intimadas  a  suspenderem  suas  atividades\n"
      )
    : console.log(
        "\nO índice está bom! Nenhuma industria ou grupo deve ser intimado!\n"
      );

  // Agradecimento
  console.log("Obrigado por participar!! :D");

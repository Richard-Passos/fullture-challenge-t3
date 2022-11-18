  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Calcular média de diversos alunos'!\n");

  let doAgain = "yes";

  while (doAgain.toLowerCase() != "no") {
    let numberOfStudents = parseFloat(
      prompt("Digite a quantidade de alunos que deseja calcular a média: ")
    );
    while (!numberOfStudents) {
      console.log("\nOpção inválida!\n");

      numberOfStudents = parseFloat(
        prompt("Digite a quantidade de alunos que deseja calcular a média: ")
      );
    }

    let students = [];

    for (let i = 0; i < numberOfStudents; i++) {
      let studentName = prompt(
        `Digite o nome do ${i + 1}º aluno: `
      );

      let firstGrade = parseFloat(prompt("Digite a 1º nota ( de 0 até 10 ): "));
      let secondGrade = parseFloat(prompt("Digite a 2º nota ( de 0 até 10 ): "));

      while (
        ( (!firstGrade && firstGrade != 0) ||
          (firstGrade < 0 || firstGrade > 10) ) ||
        ( (!secondGrade && secondGrade != 0) ||
          (secondGrade < 0 || secondGrade > 10) )
      ) {
        console.log("Alguma opção inválida");

        firstGrade = parseFloat(prompt("Digite a 1º nota ( de 0 até 10 ): "));
        secondGrade = parseFloat(prompt("Digite a 2º nota ( de 0 até 10 ): "));
      }

      let studentMedia = (firstGrade + secondGrade) / 2;

      students.push({
        name: studentName,
        firstGrade,
        secondGrade,
        media: studentMedia,
      });
    }

    students.forEach((student) => {
      console.log(`\nNome: ${student.name}, Média: ${student.media}\n`);
    });

    doAgain = prompt("Digite se deseja calcular a média novamente ( yes/no ): ");
  }

  // Agradecimento
  console.log("Obrigado por participar!! :D");

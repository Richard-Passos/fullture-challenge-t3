  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Calcular notas Fullture'!\n");

  let students = [];

  let numberOfstudents = parseFloat(
    prompt(
      "Digite a quantidade de alunos que deseja calcular a média das notas: "
    )
  );

  while (!numberOfstudents && numberOfpatients != 0) {
    console.log("\nOpção inválida!\n");

    numberOfstudents = parseFloat(
      prompt(
        "Digite a quantidade de alunos que deseja calcular a média das notas: "
      )
    );
  }

  for (let i = 0; i < numberOfstudents; i++) {
    let studentName = prompt(`Digite o NOME do ${i + 1}º aluno: `);

    let gradeOne;
    let gradeTwo;
    let gradeThree;
    let gradeFour;
    let gradeError = false;
    do {
      gradeOne = parseFloat(
        prompt(`Digite a PRIMEIRA nota do ${i + 1}º aluno ( de 0 a 10 ): `)
      );
      gradeTwo = parseFloat(
        prompt(`Digite a SEGUNDA nota do ${i + 1}º aluno ( de 0 a 10 ): `)
      );
      gradeThree = parseFloat(
        prompt(`Digite a TERCEIRA nota do ${i + 1}º aluno ( de 0 a 10 ): `)
      );
      gradeFour = parseFloat(
        prompt(`Digite a QUARTA nota do ${i + 1}º aluno ( de 0 a 10 ): `)
      );

      if (
        ( (!gradeOne && gradeOne != 0) ||
          (gradeOne < 0 || gradeOne > 10) ) ||
        ( (!gradeTwo && gradeTwo != 0) ||
          (gradeTwo < 0 || gradeTwo > 10) ) ||
        ( (!gradeThree && gradeThree != 0) ||
          (gradeThree < 0 || gradeThree > 10) ) ||
        ( (!gradeFour && gradeFour != 0) ||
          (gradeFour < 0 || gradeFour > 10) )
      ) {
        gradeError = true;
        console.log("\nAlguma opção inválida!\n")
      } else {
        gradeError = false
      }
    } while (gradeError == true);

    let mediaGrade = (gradeOne + gradeTwo + gradeThree + gradeFour) / 4;
    let approved = mediaGrade >= 6 ? true : false;

    students.push({
      name: studentName,
      gradeOne,
      gradeTwo,
      gradeThree,
      gradeFour,
      mediaGrade,
      approved,
    });
  }
  console.table(students);

  let approvedStudentCount = 0;
  let disapprovedStudentCount = 0;
  let approvedStudentPercent;

  students.forEach((student) => {
    console.log(
      `\nO Aluno ${student.name} foi ${
        student.approved == true ? "APROVADO" : "REPROVADO"
      } com média ${student.mediaGrade}.`
    );

    student.approved == true
      ? approvedStudentCount++
      : disapprovedStudentCount++;
  });
  approvedStudentPercent = (approvedStudentCount / numberOfstudents) * 100 + "%";

  console.log(
    `\n-----------------------------------------------------
    \nQuantidade de alunos APROVADOS: ${approvedStudentCount}
      \nQuantidade de alunos REPROVADOS: ${disapprovedStudentCount}
      \nPorcentagem de alunos aprovados: ${approvedStudentPercent}\n`
  );

  // Agradecimento
  console.log("Obrigado por participar!! :D");

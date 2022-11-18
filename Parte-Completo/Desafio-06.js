  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Posto de Saúde'!\n");

  let patients = [];

  let numberOfpatients = parseFloat(
    prompt("Digite a quantidade de pacientes que NÃO estão sendo minotorados: ")
  );

  while (!numberOfpatients && numberOfpatients != 0) {
    console.log("\nOpção inválida!\n");

    numberOfpatients = parseFloat(
      prompt("Digite a quantidade de pacientes que NÃO estão sendo minotorados: ")
    );
  }

  for (let i = 0; i < numberOfpatients; i++) {
    let patientName = prompt(`Digite o NOME do ${i + 1}º paciente: `);
    let patientWeight;
    let patientHeight;
    let doAgain = false;

    do {
      patientWeight = parseFloat(
        prompt(`Digite o PESO do ${i + 1}º paciente ( em quilos (Kq) ): `)
      );
      patientHeight = parseFloat(
        prompt(
          `Digite a ALTURA do ${
            i + 1
          }º paciente ( em metros (m) ) ( . no lugar de , ): `
        )
      );

      if (!patientWeight || !patientHeight) {
        console.log("\nAlguma opção inválida!\n");
      } else {
        doAgain = true;
      }
    } while (!doAgain);

    patients.push({
      name: patientName,
      weight: patientWeight,
      height: patientHeight,
    });
  }
  patients.push({
    name: "fim",
    weight: 0,
    height: 0,
  });
  console.table(patients);

  let shorterHeight = patients[0].height;
  let greaterHeight = 0;
  let sumOfWeights = 0;
  let mediaWeights;

  patients.forEach((patient) => {
    if (patient.weight != 0) {
      if (shorterHeight > patient.height) shorterHeight = patient.height;
      if (greaterHeight < patient.height) greaterHeight = patient.height;
      sumOfWeights += patient.weight;
    }
  });
  mediaWeights = sumOfWeights / numberOfpatients;

  console.log(
    `\nMenor altura: ${shorterHeight}
      \nMaior Altura: ${greaterHeight}
      \nMédia dos pesos: ${mediaWeights}\n`
  );

  // Agradecimento
  console.log("Obrigado por participar!! :D");

  const promptSync = require("prompt-sync");
  const prompt = promptSync();

  // Boas-Vindas!
  console.log("Bem-Vindo(a) ao 'Posto de Saúde'!\n");

  let patients = [];

  let numberOfpatients = parseFloat(
    prompt("Digite a quantidade de pacientes que estão sendo minotorados: ")
  );

  while (!numberOfpatients && numberOfpatients != 0) {
    console.log("\nOpção inválida!\n");

    numberOfpatients = parseFloat(
      prompt("Digite a quantidade de pacientes que estão sendo minotorados: ")
    );
  }

  for (let i = 0; i < numberOfpatients; i++) {
    let patientName = prompt(`Digite o NOME do ${i + 1}º paciente: `);
    let patientSex = prompt(`Digite o SEXO do ${i + 1}º paciente (M/F): `);
    let patientHeight = parseFloat(
      prompt(
        `Digite a ALTURA do ${
          i + 1
        }º paciente ( em metros (m) ) ( . no lugar de , ): `
      )
    );
    while (
      ( (!patientSex) ||
        ( patientSex.toUpperCase() != "M" && patientSex.toUpperCase() != "F" ) ) ||
      ( (!patientHeight) )
    ) {
        console.log("\nAlguma opção inválida!\n");

        patientSex = prompt(`Digite o SEXO do ${i + 1}º paciente (M/F): `);
        patientHeight = parseFloat(
          prompt(
            `Digite a ALTURA do ${
              i + 1
            }º paciente ( em metros (m) ) ( . no lugar de , ): `
          )
        );
    };

    patients.push({
      name: patientName,
      sex: patientSex.toUpperCase(),
      height: patientHeight,
    });
  }
  patients.push({
    name: "fim",
    sex: undefined,
    height: 0,
  });
  console.table(patients);

  let womenPatients = 0;
  let sumOfWomenHeight = 0;
  let mediaFemaleHeight;
  let menPatients = 0;
  let shorterMenHeight = "Não há paciente homem!";
  let greaterHeight = 0;

  patients.forEach((patient) => {
    if (patient.sex == "F") {
      womenPatients++
      sumOfWomenHeight += patient.height;
    } else if (patient.sex == "M") {
      menPatients++;
      if (shorterMenHeight == "Não há paciente homem!")
        shorterMenHeight = patient.height;
      if (shorterMenHeight > patient.height) 
        shorterMenHeight = patient.height;
    }

    if(greaterHeight < patient.height) greaterHeight = patient.height;
  });
  if(womenPatients == 0) {
    mediaFemaleHeight = "Não há paciente mulher!";
  } else {
    mediaFemaleHeight = sumOfWomenHeight / womenPatients;
  }

  console.log(
    `\nMaior Altura: ${greaterHeight}
      \nMédia da altura entre as mulheres: ${mediaFemaleHeight}
      \nQuantidade de homens: ${menPatients}
      \nMenor altura entre os homens: ${shorterMenHeight}\n`
  );

  // Agradecimento
  console.log("Obrigado por participar!! :D");

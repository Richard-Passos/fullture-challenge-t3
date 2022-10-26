  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Cálculo de Média'!")
  
  // Pedir notas
  let firstGrade = parseFloat(
    prompt("Digite a PRIMEIRA nota do aluno ( max: 10 )")
  );
  let secondGrade = parseFloat(
    prompt("Digite a Segunda nota do aluno ( max: 10 )")
  );

  /* Expressão de repetição caso "firstGrade" e "secondGrade" forem diferentes 
  de um número */
  while (
    (!firstGrade && firstGrade != 0) || 
    (!secondGrade && secondGrade != 0)
    ) {
    alert("Alguma opção está inválida!");

    firstGrade = parseFloat(
      prompt("Digite a PRIMEIRA nota do aluno ( max: 10 )")
    );
    secondGrade = parseFloat(
      prompt("Digite a Segunda nota do aluno ( max: 10 )")
    );
  }

  // Cálculo da média
  let mediaGrade = (firstGrade + secondGrade)/2;

  // Expressões condicionais ternárias para vericar se aluno(a) passou
  (mediaGrade >= 6)? alert(`Aluno(a) aprovado(a)! Média: ${mediaGrade}`):
  alert(`Aluno(a) reprovado(a)! Média: ${mediaGrade}`);

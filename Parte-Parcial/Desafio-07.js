  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Cálculo de IMC'!")

  // Pedir números
  let weight = parseFloat(
    prompt("Digite o seu PESO (Kg) ( . no lugar de ,)")
  )
  let height = parseFloat(
    prompt("Digite a sua ALTURA (m) ( . no lugar de ,)")
  )

  // Expressão de repetição caso "weight" e "height" forem diferentes de um número
  while(
    (!weight && weight != 0) || 
    (!height && height != 0)
  ) {
    alert("Opção inválida!")
    
    weight = parseFloat(
      prompt("Digite o seu PESO (Kg) ( . no lugar de ,)")
    )
    height = parseFloat(
      prompt("Digite a sua ALTURA (m) ( . no lugar de ,)")
    )
  }

  // Cálculo do IMC
  let imc = (weight / (height ** 2));

  // Expressões condicionais ternárias para vericar o IMC
  imc<18.5?alert(`Magreza | Seu IMC é de ${imc.toFixed(1)}`):
  imc<25?alert(`Normal | Seu IMC é de ${imc.toFixed(1)}`):
  imc<30?alert(`Sobrepeso | Seu IMC é de ${imc.toFixed(1)}`):
  imc<40?alert(`Obesidade | Seu IMC é de ${imc.toFixed(1)}`):
  alert(`Obesidade grave | Seu IMC é de ${imc.toFixed(1)}`)
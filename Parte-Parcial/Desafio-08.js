  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Cálculo de Energia Elétrica'!")

  // Pedir número
  let kwhQuantity = parseFloat(
    prompt(
      "Digite o seu consumo que energia elétrica que deseja calcular (em Kwh)"
    )
  )

  // Expressão de repetição caso "kwhQuantity" for diferente de um número
  while(!kwhQuantity && kwhQuantity != 0) {
    alert("Opção inválida!")
    
    kwhQuantity = parseFloat(
      prompt(
        "Digite o seu consumo que energia elétrica que deseja calcular (Kwh)"
      )
    );
  }

  // Variáveis para usar no futuro
  let khwPrice

  // Expressões condicionais ternárias para vericar o "kwhQuantity"
  (kwhQuantity <= 300)? khwPrice = 1.25:
  (kwhQuantity <= 600)? khwPrice = 1.5:
  (kwhQuantity <= 1000)? khwPrice = 1.75:
  khwPrice = 2

  //Imprimir resultado
  alert(`Valor final por ${kwhQuantity}Kwh: ${kwhQuantity * khwPrice}R$`)
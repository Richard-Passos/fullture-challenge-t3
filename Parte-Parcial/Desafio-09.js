  // Boas-Vindas!
  alert("Bem-Vindo(a) ao 'Maior Preço da Adega'!");

  // Criando array de exemplo
  let wineCellar = [
    //Diversos obejtos de vinhos...
    { wineName: "exemplo-1", winePrice: 499.99, wineType: "R" },
    { wineName: "exemplo-2", winePrice: 999.99, wineType: "T"},
    { wineName: "fim" },
  ];

  // Criando variáveis
  let wineNameBiggestPrice;
  let wineBiggestPrice = -1; // Para forçar a troca na primeira verificação
  let wineTypeBiggestPrice;

  // Percorrendo o array de exemplo
  alert("Por favor, aguarde. Analisando a Adega...")
  wineCellar.forEach((e) => {
    if(e.winePrice > wineBiggestPrice && e.wineName != "fim") {
      wineNameBiggestPrice = e.wineName;
      wineBiggestPrice = e.winePrice;
      wineTypeBiggestPrice = e.wineType;
    } else {
      alert("Fim da análise!");
    }
  });

  // Imprimindo resultado
  alert(
    `O vinho mais caro da Adega é:` +
      `\n   Nome:  ${(wineNameBiggestPrice).toUpperCase()}` +
      `\n   Tipo:  ${wineTypeBiggestPrice}` +
      `\n   Valor:  ${wineBiggestPrice} R$`
  );
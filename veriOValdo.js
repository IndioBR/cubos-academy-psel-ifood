function solucao(obras) {
        let maior = 0;
    let nome = ""
  for (let item of obras){
     if (maior < item.valor) {
      maior = item.valor;
      nome = item.nome;
     } 
  } console.log(nome)
}

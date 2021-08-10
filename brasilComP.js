function solucao(primeiraLetra, segundaLetra, palavras) {
      let resultado = []
  for (let i of palavras) {
    if (primeiraLetra === i[0] && segundaLetra === i[1]){
      resultado.push(i);
    } 
  } if (resultado.length === 0) {
    console.log("NENHUMA")
  } else {
    for (let i of resultado) {
    console.log(i)
    }
  }
}

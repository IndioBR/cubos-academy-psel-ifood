function solucao(sequencia) {
  const lista = [0, 1, 2, 3, 4, 5, 6]
  let stringSeq = sequencia.split('');
  let indice = 0

  for (let item of stringSeq){
    if (item === '>') {
      indice += 1;
      } if (indice > 6) {
        indice = 0;
    }
    if (item === '<'){
      indice -= 1; 
      } if (indice < 0) {
      indice = 6
    }
  } console.log(lista[indice])
}

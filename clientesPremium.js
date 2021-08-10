function solucao(precos) {
        let total = 0;
    let minPremium = false
    for (i = 0; i < precos.length; i++) {
     total += precos[i];
     if (precos[i] > 200) {
      minPremium = true
     }
    }
     if (total >= 1000 && !minPremium) {
      console.log("VIP");
    } else if (total >= 1000 && minPremium) {
      console.log("PREMIUM");
    } else {
      console.log("NORMAL");
    }
}

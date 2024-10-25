document.getElementById('currency-form').addEventListener('submit', function(event){
 
  event.preventDefault();

  const valor = parseFloat (document.getElementById('amount').value);
  const damoeda = document.getElementById("deMoeda").value;
  const paramoeda = document.getElementById("paraMoeda").value;

  const exchangeRates = {
      USD: {EUR: 0.93, BRL: 5.71},
      BRL: {EUR: 0.16, USD: 0.18},
      EUR: {BRL: 6.16, USD: 1.08}
  };

  let valorConvertido;
  if(damoeda === paramoeda){
      valorConvertido = valor;
  } else {
      valorConvertido = valor * exchangeRates [damoeda][paramoeda];
  }
  let conversao = document.getElementById('conversao');
  conversao.textContent = `Resultado ${valorConvertido.toFixed(2)} ${paramoeda}`;
});
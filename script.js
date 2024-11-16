var zadaniaListaStr = "";
var odpowiedziListaStr = "";
var dataDzisiejsza = new Date();

// TODO: zamien finalnie na grudniowe daty !!!
for (var listopad = new Date(2024, 10, 1); d <= dataDzisiejsza; listopad.setDate(listopad.getDate() + 1)) {
    var prefixPlikuZadania = 
    var dzienListopada = (listopad.getDate < 10 ? "0" : "") + listopad.getDate();
  
    zadaniaListaStr += 
      '<li><a href="/kalendarz-grudniowy-2024/zadania_' 
      + dzienListopada 
      + '_listopada_2024.pdf" class="" target="_blank">Zadania ' 
      + dzienListopada 
      + ' listopada 2024</a></li>';
  
    odpowiedziListaStr += 
      '<li><a href="/kalendarz-grudniowy-2024/odpowiedzi_' 
      + dzienListopada
      + '_listopada_2024.pdf" class="" target="_blank">Odpowiedzi ' 
      + dzienListopada
      + ' listopada 2024</a></li>';
}

var zadaniaObj = document.getElementById("zadania-lista");
var odpowiedziObj = document.getElementById("odpowiedzi-lista");

zadaniaObj.innerHTML = zadaniaListaStr;
odpowiedziObj.innerHTML = odpowiedziListaStr;

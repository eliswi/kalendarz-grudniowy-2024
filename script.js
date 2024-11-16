var zadaniaListaStr = "";
var odpowiedziListaStr = "";
var dataDzisiejsza = new Date();

// TODO: zamien finalnie na grudniowe daty !!!
for (var danyDzien = new Date(2024, 10, 1); danyDzien <= dataDzisiejsza; danyDzien.setDate(danyDzien.getDate() + 1)) {
    var dzienListopadaStr = (danyDzien.getDate() < 10 ? "0" : "") + danyDzien.getDate();
  
    zadaniaListaStr += 
      '<li><a href="/kalendarz-grudniowy-2024/zadania_' 
      + dzienListopadaStr 
      + '_listopada_2024.pdf" class="link-primary list-group-item list-group-item-action" target="_blank">Zadania ' 
      + dzienListopadaStr 
      + ' listopada 2024</a></li>';

    // Nie pokazuj odpowiedzi w danym dniu (odpowiedzi na zadania z danego dnia pojawiają się w dniu następującym).
    if (danyDzien === dataDzisiejsza) {
        break;
    }
    
    odpowiedziListaStr += 
      '<li><a href="/kalendarz-grudniowy-2024/odpowiedzi_' 
      + dzienListopadaStr
      + '_listopada_2024.pdf" class="link-primary list-group-item list-group-item-action" target="_blank">Odpowiedzi ' 
      + dzienListopadaStr
      + ' listopada 2024</a></li>';
}

var zadaniaObj = document.getElementById("zadania-lista");
var odpowiedziObj = document.getElementById("odpowiedzi-lista");

zadaniaObj.innerHTML = zadaniaListaStr;
odpowiedziObj.innerHTML = odpowiedziListaStr;

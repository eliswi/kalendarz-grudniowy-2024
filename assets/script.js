var zadaniaListaStr = '';
var odpowiedziListaStr = '';

var dataDzisiejsza = new Date();
var pierwszyGrudnia = new Date('2024-12-01');
// Ustaw date jako 1 grudnia, aby pokazac juz pierwsze zadanie.
if (dataDzisiejsza < pierwszyGrudnia) {
    dataDzisiejsza = new Date('2024-12-01');
}

for (var danyDzien = new Date(2024, 11, 1); danyDzien.getDate() <= 20 && danyDzien <= dataDzisiejsza; danyDzien.setDate(danyDzien.getDate() + 1)) {
    var dzienGrudniaStr = (danyDzien.getDate() < 10 ? "0" : "") + danyDzien.getDate();
  
    zadaniaListaStr += 
      '<li><a href="/kalendarz-grudniowy-2024/zadania_' 
      + dzienGrudniaStr 
      + '_grudnia_2024.pdf" class="link-primary list-group-item list-group-item-action" target="_blank">Zadania ' 
      + dzienGrudniaStr 
      + ' grudnia 2024</a></li>';

    // Nie pokazuj odpowiedzi w danym dniu (odpowiedzi na zadania z danego dnia pojawiają się w dniu następującym).
    if (danyDzien.getDate() === dataDzisiejsza.getDate()) {
        break;
    }
    
    odpowiedziListaStr += 
      '<li><a href="/kalendarz-grudniowy-2024/odpowiedzi_' 
      + dzienGrudniaStr
      + '_grudnia_2024.pdf" class="link-primary list-group-item list-group-item-action" target="_blank">Odpowiedzi ' 
      + dzienGrudniaStr
      + ' grudnia 2024</a></li>';
}

var zadaniaObj = document.getElementById("zadania-lista");
var odpowiedziObj = document.getElementById("odpowiedzi-lista");

// Teksty pomocnicze.
zadaniaListaStr = !zadaniaListaStr ? '<p class="pe-3 text-muted">Pierwsze zadania pojawią się 1 grudnia</p>' : zadaniaListaStr;
odpowiedziListaStr = !odpowiedziListaStr ? '<p class="ps-3 py-md-2 text-muted"><em>Odpowiedzi do zadań pojawią się 2 grudnia...</em></p>' : odpowiedziListaStr;

// Wprowadz teksty do HTML.
zadaniaObj.innerHTML = zadaniaListaStr;
odpowiedziObj.innerHTML = odpowiedziListaStr;

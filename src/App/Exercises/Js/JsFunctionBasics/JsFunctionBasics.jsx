import './styles.css';

// ---------- rodzaje funcji

// named functions
function sum(first, second) {
  console.log('inside sum func:', first, second);
  return first + second;
}

console.log('przyklad named function:', sum(2, 3));
// funkcja anonimowa
// function (first, second) {
//   return first + second
// }
// przykład zastosowania
const result = [1, 5, 3].map(function (item) {
  return item * 2;
});
console.log('przykład funkcja anonimowa:', result);

// funkcja strzałkowa
// (liczba) => { return liczba + 5; }
// (liczba) => liczba + 5
const dodaj = (licz1, licz2) => licz1 + licz2;
// przykłady:
const result2 = [1, 5, 3].map((item) => {
  return item * 2;
});
console.log('przykład 1 funkcja strzałkowa:', result2);
// przykład 2:
const result3 = [1, 5, 3].map((item) => item * 2);
console.log('przykład 2 funkcja strzałkowa:', result3);
// przykład 3:
console.log('przykład 3', dodaj(10, 5));

// --------- Liczba parametrów
console.log(
  'parametry chciałem 15 + 15 ale się pomyliłem z przecinkami',
  dodaj(15, 1, 5)
);
console.log('za mało parametrów', sum('Helo-'));

// --- return(s)
let abc;
console.log('abc', abc);
const nicNieZwraca = () => {
  console.log('nic nie zwrócę');
  // return 'zwracam coś'
}; 
console.log('nicNieZwraca: ', nicNieZwraca());
// patrz przykłady powyżej
//.. oraz
// można zwrócić wszystkie typy zmiennych;
// jak zwrócić obiekt w arrow function;
const obiekt = {
  imie: 'Artur',
  city: 'London',
};
const zwracaObiekt = () => 'hello';
const zwracaObiekt2 = () => {
  return 'hello';
};
const zwracaObiekt3 = () => ({ hello: 'hello' });
const zwracaObiekt4 = () => {
  /// coć
  // do something else
  // ...
  return { hello: 'hello' };
};
console.log(zwracaObiekt4());

//....rekurencja

const addNumbersTo = (value) => {
    if(value === 1) return 1;
    return value + addNumbersTo(value -1)
};

console.log('addNumbersTo', addNumbersTo(3));


// ------- referencaj vs value && passing arguments to functions
console.log('liczba', 3);
const tekst = 'Hello'; // wartość
console.log('tekst', tekst);
const obiekt1 = { name: 'Adam' }; // adres
console.log('obiekt', obiekt1);
let tekst2 = tekst;
console.log(
  'wynik porównania wartości:',
  tekst === tekst2 && tekst === 'Hello'
);
console.log('wynik porównania referencji: ', obiekt1 === { name: 'Adam' });
const obiekt0 = { name: 'Adam' };
console.log('wynik porównania referencji: ', obiekt1 === obiekt0);
/// przykłady modyfikacji
tekst2 = 'Bey';
console.log('warość, po zmianie:', tekst2 === tekst, tekst2, tekst);
let obiek2 = obiekt1;
console.log('porównanie adresów/referencji:', obiekt1 === obiek2);
obiek2.name = 'Paweł';
console.log('po zmianie nadal to samo:', obiekt1 === obiek2);
console.log('obiekt1: ', obiekt1);
const tablica1 = [];
const tablica2 = [];
console.log(tablica1 === tablica2);

const razyDwa = (valueObj) => {
  valueObj.value = valueObj.value * 2;
  return valueObj.value;
};

let wartosc = { value: 2 };
console.log(wartosc);
console.log('razyDwa:', razyDwa(wartosc));
console.log(wartosc);

export const JsFunctionBasics = () => {
  const [items, setItems] = useState(['hello', 'bey']);
  const handleOnClick = () => setItems([...items, 'Bey']);
  return (
    <div>
      <h1>Funkcje</h1>
      <h2>Rodzaje funkcji</h2>
      <h2>Liczba parametrów</h2>
      <h2>return(s)</h2>
      <h2>rekurencja</h2>
      <h2>adv. argumenty/parametry</h2>
      <h2>default arguments</h2>
      <h2>referencaj vs value && passing arguments to functions</h2>
      <div>
        <button onClick={handleOnClick}>Dodaj element do tablicy</button>
      </div>
      <div>
        {items.map((item) => (
          <span style={{ margin: '1rem' }}>{item}</span>
        ))}
      </div>
    </div>
  );
};
export const JsFunctionBasics = () => {
  return (
    <div>
      <h1>Funkcje</h1>
      <h2>Rodzaje funkcji</h2>
      <h2>Liczba parametrów</h2>
      <h2>return(s)</h2>
      <h2>referencja vs value & passing arguments to functions</h2>
      <div>
        <burron onClick ={handleOnClick}>Dodaj element do tablicy</burron>
      </div>
    </div>
  );
};

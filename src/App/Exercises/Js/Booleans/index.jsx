import { useState } from 'react';
import './styles.css';

export function Booleans() {
  //-------------------------------------------------------------------
  //
  // BOOLEANS
  //
  //-------------------------------------------------------------------
  // const trueValue = true;
  // const falseValue = false;

  //
  // 1. Walidacja danych - sprawdzenie czy wartość jest prawdziwa
  //
  // function isEmailValid(email) {
  //   if (email.includes('@')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  //
  // 2. Flagi stanów - zmienna, która przechowuje informację o stanie aplikacji
  //
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    // console.log('Użytkownik zalogowany?', isLogged);
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  // console.log('Użytkownik zalogowany?', isLogged);

  //
  // 3. Obsługa błędów - zmiana, która przechowuje informacje o błędzie
  //
  // const isError = false

  //
  // 4. Obsługa loaderów - zmienna, która przechowuje informację o stanie ładowania
  //
  // const isLoading = true
  // (jeśli pobraliśmy dane to isLoading = false)

  //
  // 5. Obsługa warunkowego renderowania - wyświetlenie elementu w zależności od wartości zmiennej
  //

  //-------------------------------------------------------------------
  //
  // OPERATORS - operatory logiczne
  //
  //-------------------------------------------------------------------

  const a = true;
  const b = false;

  // || - operator OR - zwraca true jeśli przynajmniej jedna operanda jest prawdziwa
  const result1 = a || b; //true
  const result2 = b || false; //false
  console.log(result1, result2);

  // && - operator AND - zwraca true jeśli oba operandy są prawdziwe
  const result3 = a && b; //false
  const result4 = a && true; // true
  const result5 = a && b && true; // false
  console.log(result3, result4, result5);

  // ! - operator negacji (NOT) - element, zwracający wartość przeciwną do wartości operandu
  const result6 = !a;
  const result7 = !b;
  console.log(result6, result7);

  // ||= operator przypisania wartości domyślnej (OR ASSIGN) - przypisuje wartość po prawej stronie do lewej strony tylko jęsli lewa strona jest false
  let result8 = 5;
  result8 ||= 10;
  console.log(result8);

  let result9 = 0;
  result9 ||= 10;
  console.log(result9);

  // &&= - operator przypisania wartości domyślnej (AND ASSIGN) - przypisuje wartość po prawej stronie do lewej strony tylko jeśli lewa strona jest true
  let result10 = 5;
  result10 &&= 10;
  console.log(result10);

  let result11 = 0;
  result11 &&= 10;
  console.log(result11);

  //
  // OPERATORS PRESENDERS - kolejność wykonywania działań
  //
  // 1. () Nawiasy (Najwyższy priorytet - wyrażenia w nawiasach są wykonywane jako pierwsze).
  // 2. ** Potęgowanie.
  // 3. *, /, % Mnożenie, dzielenie i reszta z dzielenia.
  // 4. +, - Dodawanie i odejmowanie.
  // 5. <<, >>, >>> Przesunięcie bitowe.
  // 6. <, <=, >, >= Porównania.
  // 7. ==, !=, ===, !== Porównania równości i nierówności.
  // 8. & Bitowe AND.
  // 9. ^ Bitowe XOR.
  // 10. | Bitowe OR.
  // 11. && Logiczne AND.
  // 12. || Logiczne OR.
  // 13. ? : Operator warunkowy (ternary).
  // 14. =, +=, -= i inne Operatory przypisania.

  const c = true;

  const result12 = a || (b && c);
  console.log(result12);

  const result13 = (a || b) && c;
  console.log(result13);

  return (
    <div>
      <div>
        {/* Warunkowe renderowanie */}
        {/* Jeśli lewa strona jest prawdą to wyświetlamy to co po prawej */}
        {isLogged && <button onClick={handleLogout}>Wyloguj</button>}
        {!isLogged && <button onClick={handleLogin}>Zaloguj!</button>}
      </div>
    </div>
  );
}

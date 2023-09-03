import './styles.css';

export const Numbers = () => {
  //----------------------------------------------
  //
  // NUMBERS
  //
  //----------------------------------------------

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
  //

  //
  // (+)
  //
  console.log(1 + 1);

  //
  // (-)
  //
  console.log(2 - 1);

  //
  // (*)
  //
  console.log(2 * 2);

  //
  // (/)
  //
  console.log(2 / 2);

  //
  // (%) - modulo
  //
  console.log(3 % 2);

  //
  // (**) - potęgowanie
  //
  console.log(3 ** 2);

  //
  // ZŁOŻONE OPERATORY PRZYPISANIA
  //
  // +=, -=, *=, /=, %=, **=
  //

  let x1 = 5;
  x1 **= 5;
  console.log(x1);

  //
  // OPERATORY PORÓWNANIA
  //
  // <, >, <=, >=, ==, !=, ===, !==

  // < - Mniejszy niż
  // > - Większy niż
  // <= - Mniejszy lub równy
  // >= - Większy lub równy
  // == - Równy
  // != - Nierówny
  // === - Identyczny
  // !== - Nieidentyczny

  const a = 5;
  const b = '5';
  const c = 7;

  const result1 = a > c;
  const result2 = a < c;
  const result3 = a != b;
  const result4 = a !== b;
  const result5 = a == b;
  const result6 = a === b;

  console.log(result1, result2, result3, result4, result5, result6);

  //
  // METODY NA LICZBACH
  //

  // parseInt() - zamienia string na liczbę całkowitą
  console.log(parseInt('5.2'));

  //parseFloat() - zamienia string na liczbę zmiennoprzecinkową
  console.log(parseFloat('5.2'));

  //toString() - zamienia liczbę na string
  const valueToString = 5;
  console.log(valueToString.toString());

  //toFixed - zaokrągla liczbę do podanej liczby miejsc po przecinku
  const valueToFixed = 3.142352352352;
  console.log(valueToFixed.toFixed(6));

  // NaN - Not a Number - wartość specjalna oznaczjąca 'nie jest liczbą'
  // isNaN() - sprawdza czy wartość jest NaN
  console.log(parseInt('abc'));
  console.log(100 / 'a');
  const x5 = 'abs';
  console.log(isNaN(x5));

  //
  // OBIEKT MATH
  //

  // Math.round() - zaokrągla liczbę do najbliższej liczby całkowitej
  console.log(Math.round(3.1412312141412));

  // Math.floor() - zaokrągla liczbę w dół do jabliższej liczby całkowitej
  console.log(Math.floor(3.8412312141412));

  // Math.ceil() - zaokrągla liczbę w górę do jabliższej liczby całkowitej
  console.log(Math.ceil(3.1412312141412));

  // Math.sqrt() - wywołaj metodę odpowiedzialną za pierwiastkowanie
  console.log(Math.sqrt(9));

  // Math.pow() - wywołaj metodę odpowiedzialną za potęgowanie
  console.log(Math.pow(9, 3));

  // Math.min() - wywołaj metodę odpowiedzialną za zwrócenie najmniejszej liczby z podanych
  console.log(Math.min(9, 3, 12, 5, 1));

  // Math.max() - wywołaj metodę odpowiedzialną za zwrócenie największej liczby z podanych
  console.log(Math.max(9, 3, 12, 5, 1));

  // Math.random() - wywołaj metodę odpowiedzialną za zwrócenie losowej liczby z przedziału od 0 do 1
  console.log(Math.random());
  console.log(Math.floor(Math.random() * 100));

  return <div>Numbers</div>;
};

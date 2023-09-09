import './styles.css';

export const Blok22Warmup = () => {
  const wagi = [
    { letter: 'A', score: 5 },
    { letter: 'E', score: 15 },
    { letter: 'I', score: 6 },
    { letter: 'O', score: 2 },
    { letter: 'U', score: 0 },
  ];

  return (
    <article>
      <h1>Rozgrzewka przed blokiem 22</h1>
      <section>
        <h2>Zadanie 1</h2>
        <p>
          napisz funkcję, która przyjmuje niezliczoną ilość argumentów - muszą
          to być tablice. Na przykład{' '}
        </p>
        <p>
          funkcja zwraca jedną tablicę z elementami wszystkich tablic podanych w
          argumencie.
        </p>
        <p>
          <code>
            concatArr([1, 2, 3], [4, 5], [8]) wynik [1, 2, 3, 4, 5, 8]
          </code>
        </p>
        <p>
          <code>concatArr([1, 2, 3], [4, 5], 'text') wynik "zły parametr"</code>
        </p>
      </section>
      <section>
        <h2>Zadanie 2</h2>
        <p>
          stwórz jako funkcję która przyjmuje 2 argumenty imiona oraz
          wagę/punktację.
        </p>
        <p>
          Zwraca posortowaną tablice imion z dodanym parametrem sumaWag
          niemutujaca oryginalnej
        </p>
        <p>
          <code>const wagi = {JSON.stringify(wagi)}</code>
        </p>
        <p>
          <code>{`imionaWagi(["Janek", "Zosia"], wagi)`}</code>
        </p>
        <p>
          wynik{' '}
          <code>{`[{name: "janek", score: 20}, {name:
"zosia", score: 13}]`}</code>
        </p>
      </section>
    </article>
  );
};

function concatArr(...args) {
    const concatenatedArray = args.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        return acc.concat(curr);
      } else {
        return 'zły parametr';
      }
    }, []);
    return concatenatedArray;
  }
  
  // Zadanie 2: Funkcja do przetwarzania imion i wag
  function imionaWagi(imiona, wagi) {
    const sortedImiona = imiona.slice().sort((a, b) => {
      const sumaWagA = a.reduce((acc, name) => acc + (wagi[name.toLowerCase()] || 0), 0);
      const sumaWagB = b.reduce((acc, name) => acc + (wagi[name.toLowerCase()] || 0), 0);
      return sumaWagB - sumaWagA;
    });

    const imionaIZsumami = sortedImiona.map((imie) => {
      const sumaWag = imie.reduce((acc, name) => acc + (wagi[name.toLowerCase()] || 0), 0);
      return { name: imie, score: sumaWag };
    });
  
    return imionaIZsumami;
  }
  
  // Przykłady użycia
  const tablica1 = [1, 2, 3];
  const tablica2 = [4, 5];
  const tablica3 = [8];
  console.log(concatArr(tablica1, tablica2, tablica3)); // Wynik: [1, 2, 3, 4, 5, 8]
  
  const wagi = {
    a: 5,
    e: 15,
    i: 6,
    o: 2,
    u: 0,
  };
  
  const imiona = ['Janek', 'Zosia'];
  console.log(imionaWagi(imiona, wagi));
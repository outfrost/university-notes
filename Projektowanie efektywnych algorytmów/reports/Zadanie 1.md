<center>

# Projektowanie efektywnych algorytmów

## Jednoprocesorowy problem szeregowania zadań przy kryterium minimalizacji ważonej sumy opóźnień zadań

### Zadanie projektowe nr 1:<br />Metoda programowania dynamicznego

#### Iwo Bujkiewicz (226203)

</center>

<div class="page-break"></div>

### Teoria

#### Opis problemu

Jednoprocesorowy problem szeregowania zadań przy kryterium minimalizacji ważonej sumy opóźnień zadań (ang. _Single machine total weighted tardiness problem_, SMTWTP) zdefiniowany jest następująco:

Dany jest pewien zestaw zadań, z których każde opisane jest indywidualnym numerem, ilością jednostek czasu potrzebnych do jego wykonania, wagą (priorytetem) i oczekiwanym terminem zakończenia jego wykonywania. Każde zadanie jest dostępne do wykonywania w chwili zero. Zadanie jest spóźnione, jeśli jego wykonywanie zakończy się po oczekiwanym terminie. Miara opóźnienia zadania jest równa różnicy chwili zakończenia jego wykonywania i oczekiwanego terminu zakończenia, jednak nie mniejsza, niż 0. Zadania wykonywane są bez przerwań przez pojedynczy procesor mogący wykonywać co najwyżej jedno zadanie jednocześnie. Znaleźć taką kolejność wykonywania zadań, aby zminimalizować sumę opóźnień wszystkich zadań pomnożonych przez ich wagi.

#### Algorytm

Wykorzystany w projekcie algorytm został skonstruowany częściowo na podstawie [2].

Algorytm rozpoczyna pracę od posortowania zadań w kolejności od najwcześniejszego do najpóźniejszego oczekiwanego terminu zakończenia. Jest to część heurystyczna i daje dobrą, ułożoną najczęściej korzystniej niż losowo, bazę do działań metaheurystycznych.

Następuje właściwe wyszukiwanie rozwiązania z uwzględnieniem funkcji celu. Początkowo algorytm rozpatruje podsekwencję zadań o długości 2, znajdującą się na początku całej sekwencji, a w kolejnych etapach bierze pod uwagę coraz dłuższe (o 1 zadanie na etap) podsekwencje. Na każdym etapie testuje wszystkie możliwości zamiany ostatniego elementu podsekwencji z jednym z poprzednich elementów, a następnie wykonuje taką zamianę, która daje najlepszy wynik funkcji celu (najniższą ważoną sumę opóźnień) dla danej podsekwencji, jeśli ten wynik jest lepszy od stanu aktualnego.

Kluczowa dla algorytmu jest jego ostatnia część, bez której byłby on raczej mało użyteczny. Za każdym razem, kiedy wykonana zostanie zamiana, algorytm powtarza wykonanie aktualnego etapu, co rekurencyjnie powoduje powtórzenie wszystkich dotychczasowych etapów. Pozwala to uniknąć sytuacji, w której 'krytyczne' zadanie zostałoby wypchnięte na późniejszy termin realizacji, znacznie zwiększając ważoną sumę opóźnień, bez możliwości poprawy.

Zadanie 'krytyczne' to takie, którego umieszczenie na dalszych pozycjach sekwencji zwiększa ważoną sumę opóźnień bardziej, niż większość pozostałych zadań. W praktyce są to zazwyczaj zadania, których waga jest stosunkowo wysoka, a dodatkowo charakteryzują się wczesnym terminem zakończenia i/lub długim czasem wykonywania. Ponowne rozpatrzenie aktualnego i poprzednich etapów sprawia, że algorytm jest w stanie dokonać poprawek w rozmieszczeniu rozważanych już wcześniej zadań, w zmienionej sytuacji. Dodatkową zaletą takiego rozwiązania jest fakt, że podczas ponownego przejścia może się okazać, że wzajemna pozycja zadań, która wcześniej nie miała znaczenia dla wyniku funkcji celu, stała się istotna i można ją poprawić. Przykładem takiej sytuacji jest wykonanie zamiany, w wyniku której z pozycji 8. na pozycję 4. przeniesione zostaje zadanie o dłuższym czasie wykonywania, niż to, które znajdowało się tam poprzednio. Jest możliwe, że przed tą zamianą zadania na pozycjach 5. i 6. nie były spóźnione, ale po zamianie są. Należy wtedy rozpatrzyć, czy zamiana zadań na pozycjach 5. i 6. nie poprawiłaby przypadkiem wyniku funkcji celu.

```

```

#### Złożoność obliczeniowa



### Przykład działania



### Opis implementacji



### Analiza wyników i wydajności



### Bibliografia

1. Beasley, J.E., 1990-2017. _OR-Library_ (http://people.brunel.ac.uk/~mastjjb/jeb/orlib/wtinfo.html)

1. Congram, R.K., Potts, C.N., van de Velde, S.L., 1998. _An iterated dynasearch algorithm for the single-machine total weighted tardiness scheduling problem_

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



#### Złożoność obliczeniowa



### Przykład działania



### Opis implementacji



### Analiza wyników i wydajności



### Bibliografia

1. Beasley, J.E., 1990-2017. _OR-Library_ (http://people.brunel.ac.uk/~mastjjb/jeb/orlib/wtinfo.html)

1. Congram, R.K., Potts, C.N., van de Velde, S.L., 1998. _An iterated dynasearch algorithm for the single-machine total weighted tardiness scheduling problem_

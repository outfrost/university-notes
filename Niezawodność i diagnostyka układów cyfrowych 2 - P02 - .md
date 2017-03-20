# Niezawodność i diagnostyka układów cyfrowych 2

## Spotkanie projektowe 2.

#### Elementy symulacji
1. Generator danych
	* Generuje _m_ bitów
	* Bity są od siebie niezależne
	* p(0) = p(1) = 0.5
2. Koder
	* Dzieli dane na pakiety po _n_ bitów i dodaje informację parzystości
3. Kanał transmisyjny
	* Przekłamuje niektóre bity z pewnym prawopodobieństwem _pb_
4. Dekoder
	* Odczytuje otrzymany pakiet
	* Podejmuje decyzję, czy pakiet został przesłany prawidłowo, czy nieprawidłowo

#### Cele symulacji
1. Wykres liczby błędnie przesłanych pakietów od prawdopodobieńśtwa przekłamania w kanale transmisyjnym przy stałej ilości danych i dłuości pakietu
2. Wykres liczby błędnie przesłanych pakietów od długości pakietu przy stałej ilości danych i prawdopodobieństwie przekłamania

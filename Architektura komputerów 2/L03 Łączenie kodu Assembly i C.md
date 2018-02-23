# Architektura komputerów 2

## Laboratorium 3. Łączenie kodu Assembly i C

##### Zadania na laboratorium
1. Napisać program w Assembly, który wywoła najpierw funkcję scanf, a poźniej funkcję printf. Pobieramy int,char,char* a nastęþnie je wypisujemy.

2. Napisać funkcję w Assembly wywoływaną z poziomu C. Funkcja ma zwracać do kodu C wartość z rejestru TSC (licznika cykli zegara procesora) używając instrukcji RDTSC. Aby RDTSC wykonała się po zakończeniu pozostałych operacji, należy użyć instrukcji CPUID po wyzerowaniu rejestru eax.

3. Napisać kod w C definiujący zmienną, której użyje się w kodzie Assembly. Zdefiniować fragment pamięci w Assembly i użyć go jako zmienną w C.

4. Używając funkcji z 2. zmierzyć czas wykonywania operacji printf, write i jakiejś operacji na pamięci.

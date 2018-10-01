##### Zadanie 1
Zaprojektować układ kombinacyjny, który generuje na wyjściu sygnał `1`, gry otrzymuje sygnał `1` na więcej niż 2 z 4 wejść.

###### Tabela prawdy

x4 | x3 | x2 | x1 | y  | Opis
:-:|:--:|:--:|:--:|:--:|------
0  | 0  | 0  | 0  | 0  |
0  | 0  | 0  | 1  | 0  |
0  | 0  | 1  | 0  | 0  |
0  | 0  | 1  | 1  | 0  |
0  | 1  | 0  | 1  | 0  |
0  | 1  | 0  | 0  | 0  |
0  | 1  | 1  | 0  | 0  |
0  | 1  | 1  | 1  | 1  | `(!x4)x3x2x1`
1  | 0  | 0  | 0  | 0  |
1  | 0  | 0  | 1  | 0  |
1  | 0  | 1  | 0  | 0  |
1  | 0  | 1  | 1  | 1  | `x4(!x3)x2x1`
1  | 1  | 0  | 0  | 0  |
1  | 1  | 0  | 1  | 1  | `x4x3(!x2)x1`
1  | 1  | 1  | 0  | 1  | `x4x3x2(!x1)`
1  | 1  | 1  | 1  | 1  | `x4x3x2x1`

```
0000
0001
0010
0011 .
0100 .
0101 .
0110 .
0111 .
1000 .
1001 .
1010 .
1011
1100
1101
1110
1111
```

##### Zadanie 2
Zrealizować funkcję `y=x1*x2+!x3` używając:
1. bramek AND, OR i NOT
1. bramek NAND
1. bramek NOR

##### Zadania na następne zajęcia
1. Subtraktor 1-bitowy pełny
2. Komparator sprawdzający, czy 4-bitowa liczba jest w przedziale `[3;10]`
3. Koder z Greya na binarny 3-bitowy

# Podstawy techniki mikroprocesorowej

## Sprawozdanie z laboratorium

Data				| Tytuł zajęć						| Uczestnicy				
--------------------|-----------------------------------|---------------------------
24.03.2017 14:15	| Programowanie urządzeń wyjścia	| Iwo Bujkiewicz (226203)

### Listingi programów

#### Programowanie LED na porcie P1

```assembly
	LJMP START
	ORG 0x0100

START:	MOV R2, #0x20
CYCLE:	MOV A, #0x99
	MOV P1, A	; Wpisanie wartości z akumulatora do rejestru portu P1

	MOV R0, #0x00	; Przy rozpoczęciu wykonywania poniższych pętli następuje dekrementacja, w efekcie czego 0h zmienia się w FFh
	MOV R1, #0x00	; i pętla wykonuje 2^8 iteracji.
DELAY0:	DJNZ R1, DELAY0	; Zagnieżdżona pętla opóźnienia (dekrementacja R1 i przeskok do etykiety DELAY0 jeśli wartość w R1 nie jest równa 0)
	DJNZ R0, DELAY0	; Zewnętrzna pętla opóźnienia (dekrementacja R0 i przeskok do etykiety DELAY0 jeśli wartość w R0 nie jest równa 0)

	MOV A, #0x66
	MOV P1, A	; Wpisanie wartości z akumulatora do rejestru portu P1

DELAY1:	DJNZ R1, DELAY1	; Zagnieżdżona pętla opóźnienia (dekrementacja R1 i przeskok do etykiety DELAY1 jeśli wartość w R1 nie jest równa 0)
	DJNZ R0, DELAY1	; Zagnieżdżona pętla opóźnienia (dekrementacja R0 i przeskok do etykiety DELAY1 jeśli wartość w R0 nie jest równa 0)

	DJNZ R2, CYCLE	; Pętla cyklicznej zmiany stanu portu P1

	MOV R3, #0x8
	MOV A, #0xFE
SCROLL:	MOV P1, A	; Wpisanie wartości z akumulatora do rejestru portu P1

DELAY2:	DJNZ R1, DELAY2 ; Zagnieżdżona pętla opóźnienia (dekrementacja R1 i przeskok do etykiety DELAY2 jeśli wartość w R1 nie jest równa 0)
	DJNZ R0, DELAY2 ; Zagnieżdżona pętla opóźnienia (dekrementacja R0 i przeskok do etykiety DELAY2 jeśli wartość w R0 nie jest równa 0)

	RL A		; Rotacja bitów akumulatora w lewo o 1 pozycję
	DJNZ R3, SCROLL	; Pętla "przewinięcia" stanu włączonego przez wszystkie bity portu P1

	MOV A, #0xFF
	MOV P1, A	; Wpisanie wartości z akumulatora do rejestru portu P1

	NOP
	NOP
	NOP
	JMP $
END START
```

#### Programowanie wydawania dźwięku przez metalową blaszkę sterowaną z portu P3

```assembly
	LJMP START
	ORG 0x0100

START:	MOV R4, #0x02
GO:	MOV R2, #0x10
CYCLE:	CPL P3.2	; Negacja bitu 2 portu P3

	MOV A, R4
	MOV R0, A
	MOV R1, #0x40
DELAY0:	DJNZ R1, DELAY0
	DJNZ R0, DELAY0

	CPL P3.2	; Negacja bitu 2 portu P3

	MOV A, R4
	MOV R0, A
	MOV R1, #0x40
DELAY1:	DJNZ R1, DELAY1
	DJNZ R0, DELAY1

	DJNZ R2, CYCLE
	MOV A, R4
	CPL A
	XRL A, #0xFA
	MOV R4, A
	JMP GO
	
	NOP
	NOP
	NOP
	JMP $
END START
```

#### Programowanie brzęczyka i diody na porcie P6

```assembly
	LJMP START
	P6 EQU 0x00FA	; Zdefiniowanie P6 jako adres 00FAh
	ORG 0x0100

START:	MOV A, P6	; Pobranie do akumulatora wartości z rejestru portu P6
	ORL A, #00010001B
	MOV P6, A	; Wpisanie wartości z akumlatora do rejestru portu P6

	MOV R0, #0x00
	MOV R1, #0x00
DELAY0:	DJNZ R1, DELAY0
	DJNZ R0, DELAY0

	XRL A, #00010001B
	MOV P6, A	; Wpisanie wartości z akumlatora do rejestru portu P6

DELAY1:	DJNZ R1, DELAY1
	DJNZ R0, DELAY1

	XRL A, #01000000B
	MOV P6, A	; Wpisanie wartości z akumlatora do rejestru portu P6

DELAY2:	DJNZ R1, DELAY2
	DJNZ R0, DELAY2

	JMP START
	NOP
	NOP
	NOP
	JMP $
END START
```

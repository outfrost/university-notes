# Podstawy techniki mikroprocesorowej

## Sprawozdanie z laboratorium

Data				| Tytuł zajęć									| Uczestnicy				
--------------------|-----------------------------------------------|---------------------------
10.03.2017 14:15	| Wprowadzenie do assemblera architektury 8051	| Iwo Bujkiewicz (226203)

### Listingi programów

#### Test operacji arytmetycznych

```assembly
	LJMP START	; Przeniesienie sterowania do etykiety START
	ORG 0x0100	; Wyrównanie początku kodu programu do adresu 100h

START:	MOV A, #0x20	; Zapisanie wartości 20h w akumulatorze (rejestrze A)
	MOV B, #0x07	; Zapisanie wartości 7h w rejestrze B
	ADD A, B	; Dodanie wartości z rejestru B do wartości w akumulatorze
	MOV B, #0x03	; Zapisanie wartości 3h w rejestrze B
	MUL AB		; Pomnożenie wartości z akumulatora i rejestru B i zapisanie niższej części wyniku w akumulatorze oraz wyższej części wyniku w rejestrze B
	MOV B, #0x0F	; Zapisanie wartości Fh w rejestrze B
	SUBB A, B	; Odjęcie wartości z rejestru B od wartości w akumulatorze
	MOV B, #0x19	; Zapisanie wartości 19h w rejestrze B
	DIV AB		; Podzielenie wartości z akumulatora przez wartość z B i zapisanie wyniku w akumulatorze oraz reszty w rejestrze B

	JMP $		; Przeniesienie sterowania do aktualnej instrukcji (pętla nieskończona)
END START		; Znacznik końca sekcji etykiety START
```

#### Test operacji logicznych

```assembly
	LJMP START
	ORG 0x0100

START:	MOV A, #0x77
	MOV B, #0xAF
	ANL A, B	; Wykonanie iloczynu logicznego bitów z akumulatora i rejestru B i zapisanie wyniku w akumulatorze
	MOV B, #0x11
	ORL A, B	; Wykonanie sumy logicznej bitów z akumulatora i rejestru B i zapisanie wyniku w akumulatorze
	CPL A		; Odwrócenie (wykonanie dopełnienia) bitów w akumulatorze
	XRL A, B	; Wykonanie XORa bitów z akumulatora i rejestru B i zapisanie wyniku w akumulatorze

	JMP $
END START
```

#### Test dostępu do XRAM

```assembly
	LJMP START
	ORG 0x0100

START:	MOV DPTR, #0x8080	; Zapisanie w rejestrze DPTR (rejestrze adresowym pamięci zewnętrznej) adresu 8080h
	MOVX A, @DPTR		; Zapisanie w akumulatorze wartości z pamięci zewnętrznej spod adresu wskazywanego przez rejestr DPTR
	CPL A
	MOVX @DPTR, A		; Zapisanie w pamięci zewnętrznej pod adresem wskazywanym przez DPTR wartości z akumulatora
	INC A			; Inkrementacja wartości w akumulatorze
	MOVX A, @DPTR		; Zapisanie w akumulatorze wartości z pamięci zewnętrznej spod adresu wskazywanego przez rejestr DPTR

	JMP $
END START
```

#### Test dostępu do IRAM

```assembly
	LJMP START
	ORG 0x0100

START:	MOV R0, #0x40	; Zapisanie w rejestrze R0 wartości 40h
	MOV A, @R0	; Zapisanie w akumulatorze wartości z pamięci wewnętrznej spod adresu wskazywanego przez R0
	CPL A
	MOV @R0, A	; Zapisanie w pamięci wewnętrznej pod adresem wskazywanym przez R0 wartości z akumulatora
	INC A
	MOV A, @R0	; Zapisanie w akumulatorze wartości z pamięci wewnętrznej spod adresu wskazywanego przez R0

	JMP $
END START
```

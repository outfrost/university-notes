# Podstawy techniki mikroprocesorowej

## Sprawozdanie z laboratorium

Data				| Tytuł zajęć				| Uczestnicy				
--------------------|---------------------------|---------------------------
07.04.2017 14:15	| Programowanie obsługi LCD	| Iwo Bujkiewicz (226203)

### Listingi programów

```assembly
	LJMP START

		; Zdefiniowanie adresów szyn danych LCD pod odpowiednimi nazwami
	LCDstatus	EQU	0xFF2E
	LCDcontrol	EQU	0xFF2C
	LCDdataWR	EQU	0xFF2D
	LCDdataRD	EQU	0xFF2F

		; Zdefiniowanie wartości kodów sterujących LCD
	#define	HOME	0x80	// place carriage in first line
	#define	INIT	0x38	// LCD 8-bit init
	#define	HOME2	0xC0	// place carriage in second line
	#define	LCDON	0x0E	// init carriage, switch cursor off,
				// switch blinking off
	#define	CLEAR	0x01	// clear LCD lines

	ORG 0x0100

LCDcntrlWR MACRO x	; Makro służące do wysłania kodu sterującego x do LCD
	LOCAL loop	; Informacja dla assemblera, że etykieta 'loop' jest symbolem
			; lokalnym dla makra
loop:
	MOV DPTR, #LCDstatus	; Ustawienie wskaźnika danych na adres szyny
				; statusu wyświetlacza
	MOVX A, @DPTR		; Odczytanie kodu statusu wyświetlacza
	JB ACC.7, loop		; Sprawdzenie, czy LCD jest gotowy,
				; jeśli nie - kontynuacja pętli

	MOV DPTR, #LCDcontrol	; Ustawienie wskaźnika danych na adres szyny
				; sterującej wyświetlacza
	MOV A, x		; Wypełnienie akumulatora wartością parametru x
	MOVX @DPTR, A		; Wysłanie kodu sterującego x na szynę sterującą LCD
	ENDM			; Koniec definicji makra

LCDcharWR MACRO		; Makro służące do wysłania znaku do wyświetlenia do LCD
	LOCAL loop		; Informacja dla assemblera, że etykieta 'loop' jest
				; lokalna dla makra

	PUSH ACC		; Odłożenie wartości z akumulatora na stos
loop:	MOV DPTR, #LCDstatus
	MOVX A, @DPTR
	JB ACC.7, loop		; Sprawdzenie, czy LCD jest gotowy,
				; jeśli nie - kontynuacja pętli

	MOV DPTR, #LCDdataWR	; Ustawienie wskaźnika danych na adres szyny
				; zapisu danych wyświetlacza
	POP ACC			; Zdjęcie wartości ze stosu do akumulatora
	MOVX @DPTR, A		; Wysłanie kodu znaku na szynę zapisu danych LCD
	ENDM

init_LCD MACRO			; Makro służące do zainicjowania wyświetlacza
	LCDcntrlWR #INIT	; Wysłanie kodów sterujących INIT, ...
	LCDcntrlWR #CLEAR	; ... CLEAR, ...
	LCDcntrlWR #LCDON	; ... i LCDON na szynę sterującą LCD
	ENDM

charStor MACRO x	; Makro służące do zapisania w pamięci zewnętrznej kodu znaku
			; do wysłania do LCD w sekwencji
	MOV A, x	; Załadowanie kodu znaku do akumulatora
	MOVX @DPTR, A	; Zapisanie kodu znaku pod uprzednio zadanym adresem w XRAM
	INC DPTR	; Zwiększenie adresu wskazywanego przez DPTR
			; (wybranie następnego miejsca na kod znaku)
	INC R1		; Zwiększenie R1 używanego jako licznika znaków w sekwencji
	ENDM

charSeqWr MACRO		; Makro służące do wysłania do LCD zapisanej sekwencji
			; kodów znaków
	LOCAL loop
loop:	MOVX A, @DPTR	; Załadowanie kodu znaku z XRAM do akumulatora
	LCDcharWR	; Wysłanie kodu znaku na szynę zapisu danych LCD
	INC DPTR	; Zwiększenie adresu wskazywanego przez DPTR
			; (wybranie następnego kodu znaku)
	DJNZ R1, loop	; Jeśli jeszcze nie nastąpił koniec sekwencji kodów znaków,
			; kontynuacja pętli
	ENDM

START:	init_LCD		; Zainicjowanie LCD na początku pracy programu

	LCDcntrlWR #HOME	; Wysłanie do LCD kodu sterującego HOME -
				; ustawienie kursora w pierwszej linii
	MOV R1, #0x00		; Ustawienie początkowej wartości R1
				; (licznika kodów znaków w sekwencji)
	MOV DPTR, #0x8080	; Ustawienie DPTR na adres początku miejsca w XRAM na
				; sekwencję kodów znaków
	charStor #'$'		; Zapisanie kodu znaku '$' w sekwencji
	charStor #' '		; ...
	charStor #'l'
	charStor #'s'

	MOV DPTR, #0x8080	; Ustawienie DPTR na adres początku sekwencji
				; kodów znaków w XRAM
	charSeqWr		; Wysłanie sekwencji znaków do LCD

	LCDcntrlWR #HOME2	; Wysłanie do LCD kodu sterującego HOME2 -
				; ustawienie kursora w drugiej linii
	MOV R1, #0x00
	MOV DPTR, #0x8080
	charStor #'$'
	charStor #' '
	charStor #'s'
	charStor #'u'
	charStor #'d'
	charStor #'o'
	charStor #' '
	charStor #'r'
	charStor #'m'
	charStor #' '
	charStor #'-'
	charStor #'r'
	charStor #'f'
	charStor #' '
	charStor #'/'

	MOV DPTR, #0x8080
	charSeqWr		; Wysłanie sekwencji znaków do LCD

	NOP
	NOP
	NOP
	JMP $
END START
```

# Project Panelist

Aplikacja mobilna do obsługi pytań od publiczności w trakcie konferencji, paneli dyskusyjnych, prezentacji, warsztatów i sesji Q&A.

* Architektura klient-serwer
* Podstawowa forma klienta: aplikacja mobilna (Android)
* Projekt zakłada rozszerzalność systemu o inne klienty, np. Web

### Android

#### Funkcjonalność

* Wybór nazwy użytkownika przy pierwszym uruchomieniu
* Zakładanie paneli
	* Przeglądanie zadanych pytań
		* Możliwość sortowania wg ocen bądź czasu dodania
	* Moderacja pytań
	* Zaznaczanie pytania, na które aktualnie udzielana jest odpowiedź
	* Oznaczanie pytań, na które odpowiedź została udzielona
* Dołączanie do paneli poprzez URI
	* Dodawanie pytań
	* Ocenianie pytań innych użytkowników (+/-)
	* Edycja i usuwanie swoich pytań
		* Edycja pytania nie usuwa oryginalnej treści
* Opcjonalna rejestracja kont użytkowników

#### UI

* Ekran główny: panele, do których użytkownik dołączył (aktualne oraz archiwalne)
* Ekran dołączania do panelu: możliwość wpisania URI/kodu, możliwość przejścia do panelu bezpośrednio z klikniętego w przeglądarce internetowej linku
* Widok panelu: lista zadanych pytań wraz z ich ocenami (w formie kart)
* Ekran profil użytkownika z możliwością edycji danych
